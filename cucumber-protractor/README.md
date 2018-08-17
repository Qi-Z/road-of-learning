# Cucumber and Protractor for BDD Testing
[Reference](https://medium.com/spektrakel-blog/angular-protractor-and-cucumber-552bd75ff6c9)
[Angular protractor official Doc](https://github.com/angular/protractor/blob/master/lib/config.ts)
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
## Session creation failed
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


# Tips & Quick Commands

## Check host file
`cat /etc/hosts`