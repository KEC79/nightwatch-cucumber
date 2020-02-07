module.exports = {
    'Google search test' : function (browser) {
      browser
        .url('https://www.google.com/')
        .waitForElementVisible('body')
        .assert.titleContains('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'nightwatch')
        .assert.visible('input[name=btnK]')
        .click('input[name=btnK]')
        .assert.containsText('#rso > div:nth-child(1) > div', 'Nightwatch.js')
        .end();
    }
  ,
    'Escosia search test' : function (browser) {
        browser
          .url('https://www.ecosia.org/')
          .waitForElementVisible('body')
          .assert.titleContains('Ecosia')
          .assert.visible('input[type=search]')
          .setValue('input[type=search]', 'nightwatch')
          .assert.visible('button[type=reset]')
          .click('button[type=submit]')
          //.assert.not.containsText('input[type=search]', 'nightwatch')
          .assert.containsText('.mainline-results', 'Nightwatch.js')
          .end();
      } 
  };