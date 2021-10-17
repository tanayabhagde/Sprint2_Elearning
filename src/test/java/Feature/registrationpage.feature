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
      | Tanish    | Nikose   | Tanish@gmail.com | TN                                                                         | tanish   | tanish          | 9876543210| eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there   | https://www.linkedin.com/in/abc-der-a32a18b/          | This login is already in use                     |
      
      # For entering Null values at mandatory fields
      | blank     | blank    | blank        | blank    | tanish   | tanish          | 9876543210 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    | https://www.linkedin.com/in/abc-dr-a23a18b/       | Required field                                                        |
      
      # For entering Invaid Mail ID
      | Tej       | Camp     | TC@gmail     | randomstring    | tanoph   | tanoph          | 9087643321 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there   |  https://www.linkedin.com/in/abc-dr-a23a18b/           | The email address is not complete or contains some invalid characters |
     
      #For entering more than 50 characters at Username field
      | Ted       | Den      | den@gmail.com  | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxn | tanoph   | tanoph          | 09876514323 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/         | The login needs to be maximum 50 characters long     |
      
      # For Entering Special Characters other than  _.- at User name
      | Text      | You      | Text@gmail.com | TextYou@21 | tanish   | tanish          | 098765431 | eng  |  772 |https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/          | Your login can only contain letters, numbers and _.- |
      
      # For entering different passwords at password and confirmpassword field
      | Tamrid    | Nikose   | Tanish@gmail.com |  randomstring  | tani     | tanish          | 098765433213 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/          | You have typed two different passwords |

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
      
      #Successful Login
      | Tamana    | Bhatt    | Tam@gmail.com | randomstring   | tanish   | tanish          | 0988765443 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/          |
      
      #Integer in Name feild
      | Taext12    | Bhat12   | Tam@gmail.com | randomstring  | tanish   | tanish          | 9876543210 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there   |  https://www.linkedin.com/in/abc-dr-a23a18b/          |
      
      #Special symbols in username field
      | Text                                                                                                                                                                                                                 | You                                                                                                                                                                                                        | Text@gmail.com | Texttomebwou_.21 | tanish   | tanish          | 3456899 | eng  |  772 | grt   | oi          |
      
      #Alphanumeric and special characters at code field
      | Tamana    | Bhatt    | Tam@gmail.com | randomstring   | tanish   | tanish          | 987654221 | eng  |  Abc@%772 | https://spt.skype.com/en/faq/FA10858you-there   |  https://www.linkedin.com/in/abc-dr-a23a18b/          |
      
      #FirstName and Last Name
      
      #Special symbols in firstname and lastname fields
      | @#$%^&    | You      | Text@gmail.com | randomstring | tanish   | tanish          |987654321 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/           |
      | Text      | @#$%^&   | Text@gmail.com | randomstring | tanish   | tanish          | 9876543210 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/          |
      #More than 100 characters in firstname and last name fields
      |tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan  |tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja  | Text@gmail.com | randomstring         | tanish   | tanish          |9876543210 | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there   |  https://www.linkedin.com/in/abc-dr-a23a18b/           |
			
			
			#Email
			
			#More than 100 characters at Email field
			| Sdf   |   Red    | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com | randomstring | tanish   | tanish          | 1234567890| eng|  1234 | https://spt.skype.com/en/faq/FA10858you-there    | https://www.linkedin.com/in/abc-dr-a23a18b/           |
			
			#Phone 
			
			#More than 12 characters at Phone field 
			| Teret      | tyu   | Text@gmail.com | randomstring| tanish   | tanish          | 123456790987654321123| eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    | https://www.linkedin.com/in/abc-dr-a23a18b/          |
			#Special symbols at phone number field
			| Teret      | tyu   | Text@gmail.com | randomstring| tanish   | tanish          | !@$%| eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there   |  https://www.linkedin.com/in/abc-dr-a23a18b/          |
			#Alphabetic characters at Phone number field
			| Teret      | tyu   | Text@gmail.com | randomstring| tanish   | tanish          | abcderf | eng  |  772 | https://spt.skype.com/en/faq/FA10858you-there    |  https://www.linkedin.com/in/abc-dr-a23a18b/         |
			
			#Code
			
			#More than 100 character at code field 
			| Teret      | tyu   | Text@gmail.com | randomstring| tanish   | tanish          | 1234567890| eng  |  tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan| https://spt.skype.com/en/faq/FA10858you-there    | https://www.linkedin.com/in/abc-dr-a23a18b/           |
			
			#Skype and linkedInURL
			
			#More than 100 characters at skype and linkedInURL fields
			| Teret      | tyu   | Text@gmail.com | randomstring | tanish   | tanish          | 1234567890 | eng  | 12344 | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan   | tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan         |
			
			#Special characters at skype and LinkedInURL fields
			| Sdf   |   Red    | Text@gmail.com | randomstring | tanish   | tanish          | 1234567890| eng|  1234 | @%$   | @#$          |
			