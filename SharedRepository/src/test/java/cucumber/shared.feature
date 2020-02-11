Feature: Test Calculator
This file describes calculator functionality

Scenario: Add two numbers
        Given I enter 50 in the calculator
      And I press add
     And I have entered 50 in the calculator
      When I press equal symbol
      Then The result should be 100 on the screen
      
