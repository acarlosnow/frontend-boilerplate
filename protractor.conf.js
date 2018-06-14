// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 20000,
  specs: ["./e2e/**/*.e2e-spec.ts"],
  multiCapabilities: [
    {
      browserName: "chrome",
      shardTestFiles: true,
      count: 1,
      chromeOptions: { args: ["incognito"] },
      maxInstances: 2
    }
  ],
  suites: {
    deal: "./e2e/deal/**/*.e2e-spec.ts",
    auth: "./e2e/auth/**/*.e2e-spec.ts"
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require("ts-node").register({
      project: "e2e/tsconfig.e2e.json"
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    var HtmlReporter = require("protractor-beautiful-reporter");
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "tmp/test",
        preserveDirectory: false,
        gatherBrowserLogs: true,
        docTitle: "End to End Testing"
      }).getJasmine2Reporter()
    );
  }
};
