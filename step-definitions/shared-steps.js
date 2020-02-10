const { client } = require("nightwatch-api")
var { Given, When, Then, And } = require("cucumber")

var homePage = client.page.HomePage()

Given(/^I am on the homepage$/, async () => {
  await homePage.navigate()
})