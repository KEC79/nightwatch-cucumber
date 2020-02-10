const { client } = require("nightwatch-api")
var { Given, When, Then, And } = require("cucumber")

var loginPage = client.page.LoginPage()
var homePage = client.page.HomePage()
var topNavBar = client.page.TopNavBar()
var accountSummaryPage = client.page.AccountSummaryPage()

// Given(/^I am on the homepage$/, async () => {
//   await homePage.navigate()
// })

Given(/^I am on the login page$/, () => {
    loginPage.navigate()
    loginPage.assert.title("Zero - Log in")
  })

When(/^I click on the signin button$/, async () => {
    await topNavBar.click("@signInButton")
})

When(/^I enter the "(.*?)" into the username field$/, async (username) => {
    await loginPage.setValue("@usernameField", username)
})

When(/^I enter the "(.*?)" into the password field$/, async (password) => {
    await loginPage.setValue("@passwordField", password)
})

When(/^I enter the following credentials$/, async (table) => {
    // console.log(JSON.stringify(table.hashes()[0].password));
    loginPage.login(table.hashes()[0])
  })

When(/^I try to sign in$/, async () => {
    loginPage.click("@signinButton")
})

Then(/^the login page is opened$/, async () => {
    await loginPage.assert.title("Zero - Log in");
})

Then(/^I am successfully logged in and can see the account summary page$/, async () => {
    await accountSummaryPage.assert.title("Zero - Account Summary")
})

Then(/^I am not logged in and can see an error message$/, async () => {
    await loginPage.assert.elementPresent("@errorMessage")
})