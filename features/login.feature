Feature: Log into bank

    Scenario: User can get to login page from homepage

        Given I am on the homepage
        When I click on the signin button
        Then the login page is opened

    Scenario: User cannot log in with incorrect credentials

        Given I am on the login page
        When I enter the "bad-username" into the username field
        And I enter the "bad-password" into the password field
        And I try to sign in
        Then I am not logged in and can see an error message

 Scenario: User can login to application

        Given I am on the login page
        When I enter the "username" into the username field
        And I enter the "password" into the password field
        And I try to sign in
        Then I am successfully logged in and can see the account summary page