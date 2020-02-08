const { client } = require('nightwatch-api');
var {Given, When, Then } = require('cucumber');

Given(/^I open Google's search page$/, async function() {
  await client.url('http://google.com');
});


Then(/^the title is "(.*?)"$/, async (text) => {
  await client
    .assert.titleContains("Google")
});

When(/^I search for "(.*?)"$/, async (text) => {
  await client
    .assert.visible("input[type=text]")
    .setValue("input[type=text]", (text))
    .assert.visible("input[name=btnK]")
    .click("input[name=btnK]")
});

Then(/^the Google search form exists$/, async () => {
  await client
    .assert.visible('input[type=text]')
});

Then(/^the search results page "(.*?)" is returned$/, async (text) => {
  await client
    .assert.titleContains(text)
});

//the search results page "nightwatch - Google Search" is returned