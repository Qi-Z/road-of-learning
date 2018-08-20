Feature: Home
  The default Homepage
  Scenario: Correct h1
    Given I am on the homepage
    Then I should see "Welcome to cucumber-demo"
