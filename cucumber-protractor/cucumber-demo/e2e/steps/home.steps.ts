import {Before, Given, Then} from 'cucumber';
import {AppPage} from '../src/app.po';
let app: AppPage;
Before(() => {
  app = new AppPage();
});
Given('I am on the homepage', function () {
  // Write code here that turns the phrase above into concrete actions
  app.navigateTo();
});

Then('I should see {string}', function (title: string) {
  // Write code here that turns the phrase above into concrete actions
  app.getParagraphText().then(heading => {
    expect(title).toEqual(heading);
  });
});

