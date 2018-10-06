module.exports = {

  'before': function(browser) {
    console.log('Setting up... amazon-test2 before');
    global.reporter.before++;
  },

  'beforeEach': function(browser) {
    console.log('... amazon-test2 beforeEach');
    global.reporter.beforeEach++;
  },

  'afterEach': function() {
    console.log('... amazon-test2 afterEach');
    global.reporter.afterEach++;
  },

  'after': function(browser) {
    console.log('Closing down... amazon-test2 after');
    global.reporter.after++;
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
        .end();
  },
};
