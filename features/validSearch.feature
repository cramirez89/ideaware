@validSearch
Feature: CNN Search

  Scenario: Searching NFL on CNN page

    Given The page of "CNN"
    When The main logo is displayed
    Then I click in search button
    Then I type for "NFL"
    And I click submit button
    Then No error messages are found