Feature: Feedback page

Scenario: Opening the feedback page

  Given I am on the homepage
  When I click to open the feedback page
  Then the feedback page is opened

Scenario: Submitting feedback 

  Given I am on the feedback page
  When I enter "Kim" in the name field
    And I enter "test@test.com" in the email field
    And I enter "This is a subject" in the subject field
    And I enter "This is a comment" in the comment field
    And submit the feedback information
  Then I can see that my feedback has been submitted