Feature: Elearning Registration

  Background: Automation signup and navigate to registration page
    Given User is on Elearning Application
    When User clicks on sign up link
    Then User navigates to registration page

  @Verification_of_Displayed_Images
  Scenario: Automation of registration page for verification of displayed images
    Given User is on Elearning Application
    Then User verify the Image of follow course is display or not
    Then User verify the Image of Teach course is display or not

  @Validation_Message
  Scenario Outline: Automation of registration page for validation messages
    Given User is on Elearning Application
    When User clicks on what you want to do field
    And User enters "<Firstname>","<Lastname>", "<Email>","<Username>","<Password>" and "<ConfirmPassword>"
    And User enters "<Phone>"
    And User clicks on dropdown button of language
    And User search with "<char>" and selects language
    And User enters "<Code>","<Skype>","<LinkedInURL>"
    And User clicks on Register button
    Then User gets "<validation>" message

    Examples: 
      | Firstname | Lastname | Email            | Username | Password | ConfirmPassword | Phone   | char | Code | Skype | LinkedInURL | validation                             |
      # For login is already in use
      | Tanish    | Nikose   | Tanish@gmail.com | TN                                                                         | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          | This login is already in use                     |
      
      # For entering Null values at mandatory fields
      #| blank     | blank    | blank        | blank    | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          | Required field                                                        |
      
      # For entering Invaid Mail ID
       | Tej       | Camp     | TC@gmail     | randomstring    | tanoph   | tanoph          | 3456899 | eng  |  772 | grt   | oi          | The email address is not complete or contains some invalid characters |
     
      #For entering more than 50 characters at Username field
      | Ted       | Den      | den@gmail.com  | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxn | tanoph   | tanoph          | 3456899 | eng  |  772 | grt   | oi          | The login needs to be maximum 50 characters long     |
      
      # For Entering Special Characters other than  _.- at User name
      | Text      | You      | Text@gmail.com | TextYou@21 | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          | Your login can only contain letters, numbers and _.- |
      
      # For entering different passwords at password and confirmpassword field
      | Tamrid    | Nikose   | Tanish@gmail.com |  randomstring  | tani     | tanish          | 3456899 | eng  |  772 | grt   | oi          | You have typed two different passwords |

  @Successful_registration_verification
  Scenario Outline: Automation of registration page for successfull login
    Given User is on Elearning Application
    When User clicks on what you want to do field
    And User enters "<Firstname>","<Lastname>", "<Email>","<Username>","<Password>" and "<ConfirmPassword>"
    And User enters "<Phone>"
    And User clicks on dropdown button of language
    And User search with "<char>" and selects language
    And User enters "<Code>","<Skype>","<LinkedInURL>"
    And User clicks on Register button
    Then User navigates to the Home page after successfully entering the details as "<Firstname>","<Lastname>", "<Email>","<Username>",  "<Phone>" ,"<Code>","<Skype>","<LinkedInURL>"
    When User clicks profile icon
    And User clicks on log out link
    Then User navigates to login page

    Examples: 
      | Firstname                                                                                                                                                                                                            | Lastname                                                                                                                                                                                                   | Email          | Username    | Password | ConfirmPassword | Phone   | char | Code | Skype | LinkedInURL |
      | Tamana    | Bhatt    | Tam@gmail.com | randomstring   | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
      
      #Integer in name feild
      | Taext12    | Bhat12   | Tam@gmail.com | randomstring  | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
      
      #Special symbols in username field
      | Text                                                                                                                                                                                                                 | You                                                                                                                                                                                                        | Text@gmail.com | TextYou_.21 | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
      
      #Special symbols in firstname and lastname field
      | @#$%^&    | You      | Text@gmail.com | randomstring | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
      | Text      | @#$%^&   | Text@gmail.com | randomstring | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
      
      #More than 200 characters in firstname and last name
      | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldj | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuye | Text@gmail.com | randomstring         | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
			
			#More than 200 characters at phone, code,skype and linkedInURL
			| Teret      | tyu   | Text@gmail.com | randomstring | tanish   | tanish          | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldj | eng  |  tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfuk | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldj   | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldj         |
			
			#Special charcters at phone code skype and LinkedInURL
			| Sdf   |   Red    | Text@gmail.com | randomstring | tanish   | tanish          | @#$% | eng|  @#! | @%$   | @#$          |
			
			#Alphabetic characters at Phone number field
			| Teret      | tyu   | Text@gmail.com | randomstring| tanish   | tanish          | abcderf | eng  |  772 | grt   | oi          |