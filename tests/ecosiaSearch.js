module.exports = {
    beforeEach : function(browser) {
        browser.maximizeWindow();
    },

    "Ecosia search test" : function (browser) {
        var ecosia = browser.page.ecosia();

        ecosia.navigate()
          .waitForElementVisible('body')
          .assert.titleContains('Ecosia')
          .assert.visible('@searchBar')
          .setValue('@searchBar', 'nightwatch')
          .assert.visible('@submit')
          .click('@submit')
          .assert.titleContains('nightwatch - Ecosia')
          .end();
      }, 

    "Close plant trees popup" : function (browser) {
        var ecosia = browser.page.ecosia();

        ecosia.navigate()
          .waitForElementVisible('body')
          .assert.titleContains('Ecosia')
          .assert.visible('@closeButton')
          .click('@closeButton')
          .assert.elementNotPresent('plantsTreePopup')
          .end();
      } 
}