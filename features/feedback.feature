Feature: User can send feedback

Scenario: Opening the feedback page

  Given I am on the homepage
  When I click to open the feedback page
  Then the feedback page is opened

Scenario: Submitting feedback 
  Given I am on the feedback page
  When I enter the following information into the feedback form
    | name | email         | subject | comment           |
    | Kim  | test@test.com | Hello   | This is a comment |   
  And submit the feedback information 
  Then I can see that my feedback has been submitted

Scenario: Clearing feedback form 
  Given I am on the feedback page
  When I enter the following information into the feedback form
    | name | email         | subject | comment           |
    | Kim  | test@test.com | Hello   | This is a comment |   
  And I clear the form
  Then I can see that my feedback has been cleared
