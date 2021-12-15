import * as chatbot from 'aws-cdk-lib/aws-chatbot';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement, Policy } from 'aws-cdk-lib/aws-iam';
import { Code, Function, Runtime, Architecture } from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';
import { Construct } from 'constructs';


export interface DailySpendToSlackProps {
  readonly schedule: Schedule;
  readonly slackWorkspaceId: string;
  readonly slackChannelId: string;
  readonly slackChannelName: string;
  readonly accountName: string;
}

export class DailySpendToSlack extends Construct {
  private props: DailySpendToSlackProps;

  constructor(scope: Construct, id: string, props: DailySpendToSlackProps) {
    super(scope, id);

    this.props = props;

    // Everything here should be created in the console. It is not possible automatically
    // as a link is needed with Slack which require some oAuth shenanigans.

    const slackChannel = new chatbot.SlackChannelConfiguration(this, 'DailySpendReportChannel', {
      slackChannelConfigurationName: `DailySpendreportchannel-${this.props.slackChannelName}`,
      slackWorkspaceId: this.props.slackWorkspaceId,
      slackChannelId: this.props.slackChannelId,
    });

    // Creating the SNS topic where we will send our spoofed message to

    const snsTopic = new sns.Topic(this, 'DailySpendReportSnsTopic');
    slackChannel.addNotificationTopic(snsTopic);

    // Create Lambda function

    const handler = new Function(this, 'DailySpendReportLambda', {
      handler: 'run.handler',
      code: Code.fromAsset('functions'),
      runtime: Runtime.PYTHON_3_9,
      architecture: Architecture.ARM_64,
      description: 'Lambda that will publish daily amount to SNS topic that is coupled with AWS Chatbot',
      environment: {
        SNS_TOPIC_ARN: snsTopic.topicArn,
        ACCOUNT_NICKNAME: this.props.accountName,
      },
    });

    // Set task role and permissions

    const snsPermissions = new PolicyStatement({
      actions: [
        'sns:Publish',
      ],
      resources: [snsTopic.topicArn],
    });

    const costExplorerPermissions = new PolicyStatement({
      actions: [
        'ce:GetCostAndUsage',
      ],
      resources: ['*'],
    });

    handler.role?.attachInlinePolicy(
      new Policy(this, 'sns-and-cost-explorer-permissions', {
        statements: [snsPermissions, costExplorerPermissions],
      }),
    );

    // Run this script according to schedule.

    const rule = new Rule(this, 'ScheduleBudgetNotification', {
      schedule: this.props.schedule,
    });

    rule.addTarget(new LambdaFunction(handler));

  }
}