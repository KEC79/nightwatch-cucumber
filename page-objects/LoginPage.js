module.exports = {

    url: "http://zero.webappsecurity.com/login.html",

    elements: {
        usernameField: "input[id='user_login']",
        passwordField: "input[id='user_password']",
        signinButton: "input[type='submit']",
        keepSignedInCheckbox: "input[id='user_remember_me']",
        forgottenPasswordLink: "a[href='/forgot-password.html']",
        errorMessage: ".alert-error"
    },

    // commands: [
    //     {
    //       login: function (formData) {
    //                this.setValue("@usernameField", formData.username)
    //                this.setValue("@passwordField", formData.password)
    //                this.click("@submitButton")
    //       }
    //     }
    //   ],

}