module.exports = {

  'before': function(browser, done) {
    console.log('Setting up... amazon-test before');
    global.reporter.before++;
    done();
  },

  'beforeEach': function(browser, done) {
    console.log('... amazon-test beforeEach');
    global.reporter.beforeEach++;
    done();
  },

  'afterEach': function(browser, done) {
    console.log('... amazon-test afterEach');
    global.reporter.afterEach++;
    done();
  },

  'after': function(browser, done) {
    console.log('Closing down... amazon-test after');
    global.reporter.after++;
    done();
  },

  'Demo test Amazon 1': function(browser) {
    browser
        .url(browser.launch_url)
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .waitForElementVisible('button[name=btnG]', 1000)
        .click('button[name=btnG]')
        .pause(1000)
        .assert.containsText('#main', 'Night Watch')
        .end();
  },

  'Demo test Amazon 2': function(browser) {
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
