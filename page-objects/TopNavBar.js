module.exports = {

    elements: {
        homePageLink: "a[href='/index.html']",
        searchBar: "input[id='searchTerm']",
        signInButton: "button[id='signin_button']",
    },

    commands: [
        {
          search: function (text) {
                   this.setValue("@searchBar", text)
                   this.keys(browser.Keys.ENTER)
          }
        }
      ],

}