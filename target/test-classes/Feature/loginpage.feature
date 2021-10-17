
Feature: Elearning login page

@Verification_of_Displayed_Icons
  Scenario: Automation of login page for verification of displayed icons
    Given User is on Elearning Application
    Then User verify the Icon of username is display or not
    Then User verify the Icon of password is display or not

  @login
  Scenario Outline: Automation of login page
    Given User is on the Elearning Application
    When User enter the "<userId>" and "<pass>"
    And User clicks on the login button
    Then User navigates to dashboard page Successfully

    Examples: 
      | userId | pass |
      | TK     | tim  |

  @Login_Validation
  Scenario Outline: Automation of login page for validation message
    Given User is on the Elearning Application
    When User enter the "<userId>" and "<pass>"
    And User clicks on the login button
    Then User gets validation message for invalid data

    Examples: 
      | userId | pass |
      | TK     | tt   |
      | Ttt    | tt   |

  @Forgot_Password
  Scenario Outline: Automation of I Lost My Password
    Given User is on the Elearning Application
    When User clicks on the I Lost My Password
    Then User navigates to the I Lost My Password page
    When User enters the details of Username or Email address at "<Details>"
    And User clicks on the send message button
    Then User gets a validation message

    Examples: 
      | Details       |
      | tim@gmail.com |
