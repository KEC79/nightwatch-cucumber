const { client } = require("nightwatch-api")
var { Given, When, Then, And } = require("cucumber")

var feedbackPage = client.page.FeedbackPage()
var homePage = client.page.HomePage()

Given(/^I am on the homepage$/, async () => {
  await homePage.navigate()
})

Given(/^I am on the feedback page$/, async () => {
  await homePage.navigate().click("@feedbackMenu")
})

When(/^I enter "(.*?)" in the name field$/, async (text) => {
    await feedbackPage.assert.visible("@nameField").setValue("@nameField", text)
})

When(/^I enter "(.*?)" in the email field$/, async (text) => {
    await feedbackPage.assert.visible("@emailField").setValue("@emailField", text)
})

When(/^I enter "(.*?)" in the subject field$/, async (text) => {
    await feedbackPage.assert.visible("@subjectField").setValue("@subjectField", text)
})

When(/^I enter "(.*?)" in the comment field$/, async (text) => {
    await feedbackPage.assert.visible("@commentField").setValue("@commentField", text)
})

When(/^I click to open the feedback page$/, async () => {
  await homePage.click("@feedbackMenu")
})

When(/^submit the feedback information$/, async () => {
  await feedbackPage.click("@submitButton")
})

Then(/^the feedback page is opened$/, async () => {
  await feedbackPage.assert.containsText("@pageTitle", "Feedback")
})

Then(/^I can see that my feedback has been submitted$/, async () => {
  await feedbackPage.assert.containsText("@pageTitle", "Feedback")
})
