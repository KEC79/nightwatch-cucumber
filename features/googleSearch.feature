Feature: Google Search

Scenario: Going to google home page

  Given I open the search page
  Then the title is "Google"
  And the search form exists

Scenario: Searching Google 

  Given I open the search page
  When I search for "nightwatch"
  Then the search results page "nightwatch - Google Search" is returned
  
Scenario: Searching I'm feeling lucky 

  Given I open the search page
  When I search using I'm feeling lucky
  Then the search results page "Google Doodles" is returned