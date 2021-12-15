'use strict';
import { App, Stack } from 'aws-cdk-lib';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { DailySpendToSlack } from './index';

const app = new App();
const stack = new Stack(app, 'DailySpendToSlack');

new DailySpendToSlack(stack, 'DailySpendToSlack', {
  schedule: Schedule.cron({ minute: '0', hour: '9' }),
  slackWorkspaceId: 'T02QHTSJMBQ',
  slackChannelId: 'C02QQJHLNR0',
  slackChannelName: 'Test',
  accountName: 'stroobants.dev',
});