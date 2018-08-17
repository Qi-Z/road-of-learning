// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    // './src/**/*.e2e-spec.ts'
    './features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  // framework: 'jasmine',

  // Use a custom framework and its relative path
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // cucumber options
  cucumberOpts: {
    require: ['./steps/**/*.ts'],

    tags: [],

    strict: true,

    // type[:path]
    format: [
      // 'pretty',
      'progress:reports-summary.txt',
      // 'html:reports-summary.html',
      'json:reports-summary.json'
    ],

    dryRun: false,

    compiler: []
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
