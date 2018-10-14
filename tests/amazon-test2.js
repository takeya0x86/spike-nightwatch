module.exports = {

  'beforeEach': function(browser) {
    browser.setWindowPosition(0, 0);
    browser.resizeWindow(1920, 1080);
  },

  'Demo test Google 1': function(browser) {
    browser
        .url(browser.launch_url)
        .waitForElementVisible('body', 1000)
        .setValue('#twotabsearchtextbox', 'nightwatch')
        .waitForElementVisible('#nav-search-submit-text', 1000)
        .click('#nav-search-submit-text')
        .pause(1000)
        .assert.containsText('body', 'プライム')
        .saveScreenshot('./reports/demo-test-google1.png')
        .end();
  },

  'Demo test Google 2': function(browser) {
    browser
        .url(browser.launch_url)
        .waitForElementVisible('body', 1000)
        .setValue('#twotabsearchtextbox', 'nightwatch')
        .waitForElementVisible('#nav-search-submit-text', 1000)
        .click('#nav-search-submit-text')
        .pause(1000)
        .assert.containsText('body', 'プライム')
        .saveScreenshot('./reports/demo-test-google2.png')
        .end();
  },
};
