const { client } = require("nightwatch-api");
var { Given, When, Then } = require("cucumber");

var google = client.page.google();

Given(/^I open the search page$/, async function() {
  await google
          .navigate();
});

Then(/^the title is "(.*?)"$/, async text => {
  await google
          .assert.titleContains(text);
});

When(/^I search for "(.*?)"$/, async text => {
  await google
          .assert.visible("@searchBar")
          .setValue("@searchBar", text)
          .assert.visible("@submit")
          .click("@submit");
});

When(/^I search using I'm feeling lucky$/, async () => {
  await google
          .assert.visible("@luckySubmit")
          .click("@luckySubmit");
});

Then(/^the search form exists$/, async () => {
  await google
          .assert.visible("@searchBar");
});

Then(/^the search results page "(.*?)" is returned$/, async text => {
  await google
          .assert.titleContains(text);
});
