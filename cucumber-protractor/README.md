# Cucumber and Protractor for BDD Testing
[Reference](https://medium.com/spektrakel-blog/angular-protractor-and-cucumber-552bd75ff6c9)

[Angular protractor official Doc](https://github.com/angular/protractor/blob/master/lib/config.ts)

[Serenity and how to write good specs MUST READ](https://serenity-js.org/introduction.html)
# Steps
1. Install dev dependencies
```
npm i --save-dev protractor protractor-cucumber-framework cucumber typescript ts-node chai @types/chai @types/cucumber
```

2. Config protractor conf


# Pattern to follow
[Page Object Pattern](http://www.protractortest.org/#/page-objects)

Why?
Separate Page Object, so DOM change won't affect cucumber code // **decoupled**

# 



# Problems
## Session creation failed (unsolved as of 8/17/2018)
```
[01:16:31] E/launcher - session not created exception
from disconnected: unable to connect to renderer
  (Session info: chrome=68.0.3440.106)
  (Driver info: chromedriver=2.41.578706 (5f725d1b4f0a4acbf5259df887244095596231db),platform=Mac OS X 10.13.6 x86_64)
[01:16:31] E/launcher - SessionNotCreatedError: session not created exception
```
Use these 3 links:

[stackoverflow-1](https://stackoverflow.com/questions/46807596/webdrivererror-disconnected-unable-to-connect-to-renderer#comment90246515_49985242)

[protractor github issue](https://github.com/angular/protractor/issues/4347)

[brew](https://github.com/Homebrew/brew/issues/4089)

[Change host file](https://stackoverflow.com/questions/40224551/unable-to-connect-to-renderer-after-upgrade-to-protractor-4-0-9-tests-wont-r?rq=1)

A few options to try:
a. `brew cask install chromedriver`
b. `webdriver-manager update --versions.chrome=2.29` 

## tests show pass before execution
https://stackoverflow.com/questions/38405184/protractor-cucumber-bdd-tests-show-pass-before-execution

## how is Chrome controlled
[test script] <-----> [selenium driver] <------> [web driver like chrome]

To connect directly:
Use 
```
chromeOnly: true,
directConnect: true,
```
in `protractor.conf.js`

# Tips & Quick Commands

## Check host file
`cat /etc/hosts`

## require.resolve('')
Use the internal `require()` machinery to look up the location of a module, but rather than loading the module, just return the resolved filename.



# Libraries
## cucumber-pretty
[npm](https://www.npmjs.com/package/cucumber-pretty)

## Different formatters
https://relishapp.com/cucumber/cucumber/docs/formatters/usage-formatter

# Fun Readings
[Say no to more e2e tests by Google](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

[What does end to end test mean](http://toolsqa.com/software-testing/what-does-end-to-end-test-mean/)

[Protractor can be used for non Angular app](https://medium.com/@marcelmokos/end-to-end-testing-with-protractor-using-modern-javascript-syntax-44e5121c2e03)
