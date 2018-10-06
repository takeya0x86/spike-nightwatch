module.exports = {
  src_folders: ['./tests'],
  output_folder: './reports',
  globals_path: './globals-module.js',
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
    },
  },
  test_settings: {
    default: {
      launch_url: 'https://www.amazon.co.jp',
      selenium_host: 'localhost',
      port: '4444',
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: './reports/screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
      skip_testcases_on_fail: false,
    },
  },
};
