const { client } = require("nightwatch-api")
var { Given, When, Then, And } = require("cucumber")

var feedbackPage = client.page.FeedbackPage()
var homePage = client.page.HomePage()

// Given(/^I am on the homepage$/, async () => {
//   await homePage.navigate()
// })

Given(/^I am on the feedback page$/, async () => {
  await homePage.navigate().click("@feedbackMenu")
})

When(/^I enter the following information into the feedback form$/, async (table) => {
  feedbackPage.sendFeedback(table.hashes()[0])
})

When(/^I click to open the feedback page$/, async () => {
  await homePage.click("@feedbackMenu")
})

When(/^submit the feedback information$/, async () => {
  await feedbackPage.click("@submitButton")
})

When(/^I clear the form$/, async () => {
  await feedbackPage.click("@clearButton")
})

Then(/^I can see that my feedback has been cleared$/, async () => {
  await feedbackPage.assert.containsText("@nameField", "")
  .assert.containsText("@emailField", "")
  .assert.containsText("@subjectField", "")
  .assert.containsText("@commentField", "")
})


Then(/^the feedback page is opened$/, async () => {
  await feedbackPage.assert.containsText("@pageTitle", "Feedback")
})

Then(/^I can see that my feedback has been submitted$/, async () => {
  await feedbackPage.assert.containsText("@pageTitle", "Feedback")
})
