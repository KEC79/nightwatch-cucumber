module.exports = {
  "Google about page": function(browser) {
    var google = browser.page.google();

    google
      .navigate()
      .waitForElementVisible("body")
      .assert.titleContains("Google")
      .assert.visible("@aboutLink")
      .click("@aboutLink")
      .assert.titleContains("Google - About")
      .end();
  }
};
