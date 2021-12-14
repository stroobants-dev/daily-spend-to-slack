const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Tom Stroobants',
  authorAddress: 'tom.stroobants@cloudar.be',
  cdkVersion: '2.0.0',
  defaultReleaseBranch: 'main',
  name: 'daily-budget-to-slack',
  repositoryUrl: 'https://github.com/tom.stroobants/daily-budget-to-slack.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();