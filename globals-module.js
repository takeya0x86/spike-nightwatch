module.exports = {
  before: function(done) {
    console.log('GLOBAL BEFORE');
    global.reporter = {
      before: 0,
      after: 0,
      beforeEach: 0,
      afterEach: 0,
    };
    done();
  },

  beforeEach: function(browser, done) {
    console.log('GLOBAL beforeEach');
    global.reporter['Global beforeEach'] = true;
    done();
  },

  afterEach: function(browser, done) {
    browser.perform(function() {
      console.log('GLOBAL afterEach');
      global.reporter['Global afterEach'] = true;
      done();
    });
  },

  after: function(done) {
    console.log('GLOBAL AFTER');
    global.reporter['Global after'] = true;
    done();
  },

};
