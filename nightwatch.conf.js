module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",
  page_objects_path: ["pages"],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    log_path: "",
    port: 4444,
    cli_args: {
        'webdriver.gecko.driver': require('geckodriver').path,
        'webdriver.chrome.driver': require('chromedriver').path,
        'webdriver.ie.driver': 'node_modules/iedriver/lib/iedriver/IEDriverServer.exe'
    }
  },

  // test_workers: {
  //   enabled: true,
  //   workers: "auto"
  // },

  test_settings: {

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
         chromeOptions: {
           args: ["--no-sandbox"],
           w3c: false
         }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: "firefox"
      }
    },

    ie: {
        desiredCapabilities: {
          browserName: "internet explorer"
        }
      }

  }
};
