const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Tom Stroobants',
  authorAddress: 'tom@stroobants.dev',
  cdkVersion: '2.0.0',
  license: 'MPL-2.0',
  defaultReleaseBranch: 'main',
  name: 'daily-spend-to-slack',
  repositoryUrl: 'https://github.com/stroobants-dev/daily-spend-to-slack.git',
  keywords: ['awscdk', 'cdk', 'budget', 'spend', 'daily', 'slack', 'cost', 'finops'],
  workflowNodeVersion: '^14.17.0',
  python: {
    distName: 'cdk-daily-spend-to-slack',
    module: 'cdk_daily_spend_to_slack',
  },
  deps: [
    'aws-cdk-lib',
    'constructs',
  ], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
  // python: {
  //   distName: 'cloudwatch-auto-retention',
  //   module: 'cdk_cloudwatch_auto_retention',
  // },
});
const common_exclude = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude, 'images');
project.synth();