module.exports = {
  "Google search test": function(browser) {
    var google = browser.page.google();

    google.navigate()
      .waitForElementVisible("body")
      .assert.titleContains("Google")
      .assert.visible("@searchBar")
      .setValue("@searchBar", "nightwatch")
      .assert.visible("@submit")
      .click("@submit")
      // .assert.titleContains("nightwatch - Google Search")
      .end();
  }
};
