module.exports = {
  url: "http://zero.webappsecurity.com/feedback.html",

  elements: {
    pageTitle: "h3[id='feedback-title']",
    description: "div[id='description']",
    faqLink: "span[id='faq-link']",
    nameField: "input[id='name']",
    emailField: "input[id='email']",
    subjectField: "input[id='subject']",
    commentField: "textarea[id='comment']",
    submitButton: "input[type='submit']",
    clearButton: "input[type='reset']",
  },

  props: {
      pause: 1000
  }

}
