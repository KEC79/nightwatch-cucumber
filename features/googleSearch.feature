Feature: Google Search

Scenario: Going to google home page

  Given I open Google's search page
  Then the title is "Google"
  And the Google search form exists

Scenario: Searching Google 

  Given I open Google's search page
  When I search for "nightwatch"
  Then the search results page "nightwatch - Google Search" is returned