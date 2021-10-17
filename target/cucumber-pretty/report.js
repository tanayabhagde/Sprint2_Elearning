$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 2,
  "name": "Elearning login page",
  "description": "",
  "id": "elearning-login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10822473100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Automation of login page for verification of displayed icons",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page-for-verification-of-displayed-icons",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Verification_of_Displayed_Icons"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User verify the Icon of username is display or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User verify the Icon of password is display or not",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 840293899,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_verify_the_Icon_of_username_is_display_or_not()"
});
formatter.result({
  "duration": 4158017800,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_verify_the_Icon_of_password_is_display_or_not()"
});
formatter.result({
  "duration": 4053190499,
  "status": "passed"
});
formatter.after({
  "duration": 1077621900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Automation of login page",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the \"\u003cuserId\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User navigates to dashboard page Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page;",
  "rows": [
    {
      "cells": [
        "userId",
        "pass"
      ],
      "line": 18,
      "id": "elearning-login-page;automation-of-login-page;;1"
    },
    {
      "cells": [
        "TK",
        "tim"
      ],
      "line": 19,
      "id": "elearning-login-page;automation-of-login-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8737686200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Automation of login page",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enter the \"TK\" and \"tim\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User navigates to dashboard page Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "logindefination.user_is_on_the_Elearning_Application()"
});
formatter.result({
  "duration": 174481600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TK",
      "offset": 16
    },
    {
      "val": "tim",
      "offset": 25
    }
  ],
  "location": "logindefination.user_enter_the_and(String,String)"
});
formatter.result({
  "duration": 2248685899,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 15151044600,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_navigates_to_dashboard_page_Successfully()"
});
formatter.result({
  "duration": 2026911700,
  "status": "passed"
});
formatter.after({
  "duration": 4150324500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Automation of login page for validation message",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page-for-validation-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Login_Validation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enter the \"\u003cuserId\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User gets validation message for invalid data",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page-for-validation-message;",
  "rows": [
    {
      "cells": [
        "userId",
        "pass"
      ],
      "line": 29,
      "id": "elearning-login-page;automation-of-login-page-for-validation-message;;1"
    },
    {
      "cells": [
        "TK",
        "tt"
      ],
      "line": 30,
      "id": "elearning-login-page;automation-of-login-page-for-validation-message;;2"
    },
    {
      "cells": [
        "Ttt",
        "tt"
      ],
      "line": 31,
      "id": "elearning-login-page;automation-of-login-page-for-validation-message;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7716955600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Automation of login page for validation message",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page-for-validation-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Login_Validation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enter the \"TK\" and \"tt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User gets validation message for invalid data",
  "keyword": "Then "
});
formatter.match({
  "location": "logindefination.user_is_on_the_Elearning_Application()"
});
formatter.result({
  "duration": 121974399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TK",
      "offset": 16
    },
    {
      "val": "tt",
      "offset": 25
    }
  ],
  "location": "logindefination.user_enter_the_and(String,String)"
});
formatter.result({
  "duration": 2186808999,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 3992449200,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_gets_validation_message_for_invalid_data()"
});
formatter.result({
  "duration": 47064400,
  "status": "passed"
});
formatter.after({
  "duration": 1101583200,
  "status": "passed"
});
formatter.before({
  "duration": 7149175500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Automation of login page for validation message",
  "description": "",
  "id": "elearning-login-page;automation-of-login-page-for-validation-message;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Login_Validation"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enter the \"Ttt\" and \"tt\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User gets validation message for invalid data",
  "keyword": "Then "
});
formatter.match({
  "location": "logindefination.user_is_on_the_Elearning_Application()"
});
formatter.result({
  "duration": 133345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ttt",
      "offset": 16
    },
    {
      "val": "tt",
      "offset": 26
    }
  ],
  "location": "logindefination.user_enter_the_and(String,String)"
});
formatter.result({
  "duration": 2141704001,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 4086743200,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_gets_validation_message_for_invalid_data()"
});
formatter.result({
  "duration": 146169000,
  "status": "passed"
});
formatter.after({
  "duration": 782902000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Automation of I Lost My Password",
  "description": "",
  "id": "elearning-login-page;automation-of-i-lost-my-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Forgot_Password"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on the I Lost My Password",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User navigates to the I Lost My Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User enters the details of Username or Email address at \"\u003cDetails\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User clicks on the send message button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User gets a validation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "elearning-login-page;automation-of-i-lost-my-password;",
  "rows": [
    {
      "cells": [
        "Details"
      ],
      "line": 43,
      "id": "elearning-login-page;automation-of-i-lost-my-password;;1"
    },
    {
      "cells": [
        "tim@gmail.com"
      ],
      "line": 44,
      "id": "elearning-login-page;automation-of-i-lost-my-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8658705900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Automation of I Lost My Password",
  "description": "",
  "id": "elearning-login-page;automation-of-i-lost-my-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@Forgot_Password"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on the Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User clicks on the I Lost My Password",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User navigates to the I Lost My Password page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User enters the details of Username or Email address at \"tim@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User clicks on the send message button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User gets a validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "logindefination.user_is_on_the_Elearning_Application()"
});
formatter.result({
  "duration": 141367700,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_clicks_on_the_I_Lost_My_Password()"
});
formatter.result({
  "duration": 3854396199,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_navigates_to_the_I_Lost_My_Password_page()"
});
formatter.result({
  "duration": 2022666401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim@gmail.com",
      "offset": 57
    }
  ],
  "location": "logindefination.user_enters_the_details_of_Username_or_Email_address_at(String)"
});
formatter.result({
  "duration": 2259048700,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_clicks_on_the_send_message_button()"
});
formatter.result({
  "duration": 6592783400,
  "status": "passed"
});
formatter.match({
  "location": "logindefination.user_gets_a_validation_message()"
});
formatter.result({
  "duration": 66703699,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.logindefination.user_gets_a_validation_message(logindefination.java:225)\r\n\tat ✽.Then User gets a validation message(loginpage.feature:40)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1242671801,
  "status": "passed"
});
formatter.uri("registrationpage.feature");
formatter.feature({
  "line": 1,
  "name": "Elearning Registration",
  "description": "",
  "id": "elearning-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7770123800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 156679201,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 5520340300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2070999500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Automation of registration page for verification of displayed images",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-verification-of-displayed-images",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Verification_of_Displayed_Images"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User verify the Image of follow course is display or not",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify the Image of Teach course is display or not",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 27737999,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_verify_the_Image_of_follow_course_is_display_or_not()"
});
formatter.result({
  "duration": 107404800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_verify_the_Image_of_Teach_course_is_display_or_not()"
});
formatter.result({
  "duration": 102778100,
  "status": "passed"
});
formatter.after({
  "duration": 875277899,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cFirstname\u003e\",\"\u003cLastname\u003e\", \"\u003cEmail\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"\u003cchar\u003e\" and selects language",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"\u003cCode\u003e\",\"\u003cSkype\u003e\",\"\u003cLinkedInURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"\u003cvalidation\u003e\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Username",
        "Password",
        "ConfirmPassword",
        "Phone",
        "char",
        "Code",
        "Skype",
        "LinkedInURL",
        "validation"
      ],
      "line": 27,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;1"
    },
    {
      "comments": [
        {
          "line": 28,
          "value": "# For login is already in use"
        }
      ],
      "cells": [
        "Tanish",
        "Nikose",
        "Tanish@gmail.com",
        "TN",
        "tanish",
        "tanish",
        "9876543210",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-der-a32a18b/",
        "This login is already in use"
      ],
      "line": 29,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;2"
    },
    {
      "comments": [
        {
          "line": 31,
          "value": "# For entering Null values at mandatory fields"
        }
      ],
      "cells": [
        "blank",
        "blank",
        "blank",
        "blank",
        "tanish",
        "tanish",
        "9876543210",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/",
        "Required field"
      ],
      "line": 32,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;3"
    },
    {
      "comments": [
        {
          "line": 34,
          "value": "# For entering Invaid Mail ID"
        }
      ],
      "cells": [
        "Tej",
        "Camp",
        "TC@gmail",
        "randomstring",
        "tanoph",
        "tanoph",
        "9087643321",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/",
        "The email address is not complete or contains some invalid characters"
      ],
      "line": 35,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;4"
    },
    {
      "comments": [
        {
          "line": 37,
          "value": "#For entering more than 50 characters at Username field"
        }
      ],
      "cells": [
        "Ted",
        "Den",
        "den@gmail.com",
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxn",
        "tanoph",
        "tanoph",
        "09876514323",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/",
        "The login needs to be maximum 50 characters long"
      ],
      "line": 38,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;5"
    },
    {
      "comments": [
        {
          "line": 40,
          "value": "# For Entering Special Characters other than  _.- at User name"
        }
      ],
      "cells": [
        "Text",
        "You",
        "Text@gmail.com",
        "TextYou@21",
        "tanish",
        "tanish",
        "098765431",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/",
        "Your login can only contain letters, numbers and _.-"
      ],
      "line": 41,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;6"
    },
    {
      "comments": [
        {
          "line": 43,
          "value": "# For entering different passwords at password and confirmpassword field"
        }
      ],
      "cells": [
        "Tamrid",
        "Nikose",
        "Tanish@gmail.com",
        "randomstring",
        "tani",
        "tanish",
        "098765433213",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/",
        "You have typed two different passwords"
      ],
      "line": 44,
      "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9631177000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 152691900,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4530042399,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2026748300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "# For login is already in use"
    }
  ],
  "line": 29,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Tanish\",\"Nikose\", \"Tanish@gmail.com\",\"TN\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"9876543210\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-der-a32a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"This login is already in use\" message",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 24279400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tanish",
      "offset": 13
    },
    {
      "val": "Nikose",
      "offset": 22
    },
    {
      "val": "Tanish@gmail.com",
      "offset": 32
    },
    {
      "val": "TN",
      "offset": 51
    },
    {
      "val": "tanish",
      "offset": 56
    },
    {
      "val": "tanish",
      "offset": 69
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25447465899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543210",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2105225500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2362623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3233793100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-der-a32a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6671246999,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4764521700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This login is already in use",
      "offset": 11
    }
  ],
  "location": "registrationdefination.user_gets_message(String)"
});
formatter.result({
  "duration": 2083590000,
  "status": "passed"
});
formatter.after({
  "duration": 1218165499,
  "status": "passed"
});
formatter.before({
  "duration": 12671604900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 147810700,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 6106037400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2025278699,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "# For entering Null values at mandatory fields"
    }
  ],
  "line": 32,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"blank\",\"blank\", \"blank\",\"blank\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"9876543210\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"Required field\" message",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 16921699,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 13
    },
    {
      "val": "blank",
      "offset": 21
    },
    {
      "val": "blank",
      "offset": 30
    },
    {
      "val": "blank",
      "offset": 38
    },
    {
      "val": "tanish",
      "offset": 46
    },
    {
      "val": "tanish",
      "offset": 59
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25139767200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543210",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2254563300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2211568500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3397445100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6769086901,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3590628200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Required field",
      "offset": 11
    }
  ],
  "location": "registrationdefination.user_gets_message(String)"
});
formatter.result({
  "duration": 2103178500,
  "status": "passed"
});
formatter.after({
  "duration": 1271585500,
  "status": "passed"
});
formatter.before({
  "duration": 7303478700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 152404601,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4236960099,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2008457799,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 34,
      "value": "# For entering Invaid Mail ID"
    }
  ],
  "line": 35,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Tej\",\"Camp\", \"TC@gmail\",\"randomstring\",\"tanoph\" and \"tanoph\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"9087643321\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"The email address is not complete or contains some invalid characters\" message",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 22256400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tej",
      "offset": 13
    },
    {
      "val": "Camp",
      "offset": 19
    },
    {
      "val": "TC@gmail",
      "offset": 27
    },
    {
      "val": "randomstring",
      "offset": 38
    },
    {
      "val": "tanoph",
      "offset": 53
    },
    {
      "val": "tanoph",
      "offset": 66
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25058692399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9087643321",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2252737700,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2236757301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3425484499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6867353099,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 5323103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email address is not complete or contains some invalid characters",
      "offset": 11
    }
  ],
  "location": "registrationdefination.user_gets_message(String)"
});
formatter.result({
  "duration": 2071685200,
  "status": "passed"
});
formatter.after({
  "duration": 1173438999,
  "status": "passed"
});
formatter.before({
  "duration": 10257200101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 153287800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4601885400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2010826900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 37,
      "value": "#For entering more than 50 characters at Username field"
    }
  ],
  "line": 38,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Ted\",\"Den\", \"den@gmail.com\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxn\",\"tanoph\" and \"tanoph\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"09876514323\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"The login needs to be maximum 50 characters long\" message",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 12840500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 196400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ted",
      "offset": 13
    },
    {
      "val": "Den",
      "offset": 19
    },
    {
      "val": "den@gmail.com",
      "offset": 26
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxn",
      "offset": 42
    },
    {
      "val": "tanoph",
      "offset": 119
    },
    {
      "val": "tanoph",
      "offset": 132
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25521499000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09876514323",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2203507101,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2218181599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3408058600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6807199500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3406239299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The login needs to be maximum 50 characters long",
      "offset": 11
    }
  ],
  "location": "registrationdefination.user_gets_message(String)"
});
formatter.result({
  "duration": 2101386999,
  "status": "passed"
});
formatter.after({
  "duration": 1216968001,
  "status": "passed"
});
formatter.before({
  "duration": 167726760100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 146141300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3933258599,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2027357701,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 40,
      "value": "# For Entering Special Characters other than  _.- at User name"
    }
  ],
  "line": 41,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Text\",\"You\", \"Text@gmail.com\",\"TextYou@21\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"098765431\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"Your login can only contain letters, numbers and _.-\" message",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 16810399,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 21499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 13
    },
    {
      "val": "You",
      "offset": 20
    },
    {
      "val": "Text@gmail.com",
      "offset": 27
    },
    {
      "val": "TextYou@21",
      "offset": 44
    },
    {
      "val": "tanish",
      "offset": 57
    },
    {
      "val": "tanish",
      "offset": 70
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25282470500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "098765431",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2250040800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2223241900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3423839700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6797591200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3228174200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your login can only contain letters, numbers and _.-",
      "offset": 11
    }
  ],
  "location": "registrationdefination.user_gets_message(String)"
});
formatter.result({
  "duration": 2106693400,
  "status": "passed"
});
formatter.after({
  "duration": 1336334900,
  "status": "passed"
});
formatter.before({
  "duration": 9198885501,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 126290500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3969159500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2009905899,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "# For entering different passwords at password and confirmpassword field"
    }
  ],
  "line": 44,
  "name": "Automation of registration page for validation messages",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-validation-messages;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Validation_Message"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Tamrid\",\"Nikose\", \"Tanish@gmail.com\",\"randomstring\",\"tani\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"098765433213\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User gets \"You have typed two different passwords\" message",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 14230899,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tamrid",
      "offset": 13
    },
    {
      "val": "Nikose",
      "offset": 22
    },
    {
      "val": "Tanish@gmail.com",
      "offset": 32
    },
    {
      "val": "randomstring",
      "offset": 51
    },
    {
      "val": "tani",
      "offset": 66
    },
    {
      "val": "tanish",
      "offset": 77
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25455036601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "098765433213",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2267664100,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2223744400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3435459799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6791782899,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 3209237901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You have typed two different passwords",
      "offset": 11
    }
  ],
  "location": "registrationdefination.user_gets_message(String)"
});
formatter.result({
  "duration": 2055574400,
  "status": "passed"
});
formatter.after({
  "duration": 1226531200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"\u003cFirstname\u003e\",\"\u003cLastname\u003e\", \"\u003cEmail\u003e\",\"\u003cUsername\u003e\",\"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"\u003cchar\u003e\" and selects language",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"\u003cCode\u003e\",\"\u003cSkype\u003e\",\"\u003cLinkedInURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"\u003cFirstname\u003e\",\"\u003cLastname\u003e\", \"\u003cEmail\u003e\",\"\u003cUsername\u003e\",  \"\u003cPhone\u003e\" ,\"\u003cCode\u003e\",\"\u003cSkype\u003e\",\"\u003cLinkedInURL\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Username",
        "Password",
        "ConfirmPassword",
        "Phone",
        "char",
        "Code",
        "Skype",
        "LinkedInURL"
      ],
      "line": 62,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;1"
    },
    {
      "comments": [
        {
          "line": 64,
          "value": "#Successful Login"
        }
      ],
      "cells": [
        "Tamana",
        "Bhatt",
        "Tam@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "0988765443",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 65,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;2"
    },
    {
      "comments": [
        {
          "line": 67,
          "value": "#Integer in Name feild"
        }
      ],
      "cells": [
        "Taext12",
        "Bhat12",
        "Tam@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "9876543210",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 68,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;3"
    },
    {
      "comments": [
        {
          "line": 70,
          "value": "#Special symbols in username field"
        }
      ],
      "cells": [
        "Text",
        "You",
        "Text@gmail.com",
        "Texttomebwou_.21",
        "tanish",
        "tanish",
        "3456899",
        "eng",
        "772",
        "grt",
        "oi"
      ],
      "line": 71,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;4"
    },
    {
      "comments": [
        {
          "line": 73,
          "value": "#Alphanumeric and special characters at code field"
        }
      ],
      "cells": [
        "Tamana",
        "Bhatt",
        "Tam@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "987654221",
        "eng",
        "Abc@%772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 74,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;5"
    },
    {
      "comments": [
        {
          "line": 76,
          "value": "#FirstName and Last Name"
        },
        {
          "line": 78,
          "value": "#Special symbols in firstname and lastname fields"
        }
      ],
      "cells": [
        "@#$%^\u0026",
        "You",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "987654321",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 79,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;6"
    },
    {
      "cells": [
        "Text",
        "@#$%^\u0026",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "9876543210",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 80,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;7"
    },
    {
      "comments": [
        {
          "line": 81,
          "value": "#More than 100 characters in firstname and last name fields"
        }
      ],
      "cells": [
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "9876543210",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 82,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;8"
    },
    {
      "comments": [
        {
          "line": 85,
          "value": "#Email"
        },
        {
          "line": 87,
          "value": "#More than 100 characters at Email field"
        }
      ],
      "cells": [
        "Sdf",
        "Red",
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "1234567890",
        "eng",
        "1234",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 88,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;9"
    },
    {
      "comments": [
        {
          "line": 90,
          "value": "#Phone"
        },
        {
          "line": 92,
          "value": "#More than 12 characters at Phone field"
        }
      ],
      "cells": [
        "Teret",
        "tyu",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "123456790987654321123",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 93,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;10"
    },
    {
      "comments": [
        {
          "line": 94,
          "value": "#Special symbols at phone number field"
        }
      ],
      "cells": [
        "Teret",
        "tyu",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "!@$%",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 95,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;11"
    },
    {
      "comments": [
        {
          "line": 96,
          "value": "#Alphabetic characters at Phone number field"
        }
      ],
      "cells": [
        "Teret",
        "tyu",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "abcderf",
        "eng",
        "772",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 97,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;12"
    },
    {
      "comments": [
        {
          "line": 99,
          "value": "#Code"
        },
        {
          "line": 101,
          "value": "#More than 100 character at code field"
        }
      ],
      "cells": [
        "Teret",
        "tyu",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "1234567890",
        "eng",
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
        "https://spt.skype.com/en/faq/FA10858you-there",
        "https://www.linkedin.com/in/abc-dr-a23a18b/"
      ],
      "line": 102,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;13"
    },
    {
      "comments": [
        {
          "line": 104,
          "value": "#Skype and linkedInURL"
        },
        {
          "line": 106,
          "value": "#More than 100 characters at skype and linkedInURL fields"
        }
      ],
      "cells": [
        "Teret",
        "tyu",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "1234567890",
        "eng",
        "12344",
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
        "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan"
      ],
      "line": 107,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;14"
    },
    {
      "comments": [
        {
          "line": 109,
          "value": "#Special characters at skype and LinkedInURL fields"
        }
      ],
      "cells": [
        "Sdf",
        "Red",
        "Text@gmail.com",
        "randomstring",
        "tanish",
        "tanish",
        "1234567890",
        "eng",
        "1234",
        "@%$",
        "@#$"
      ],
      "line": 110,
      "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;15"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7981145300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 131911400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3751279701,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2015110900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 64,
      "value": "#Successful Login"
    }
  ],
  "line": 65,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Tamana\",\"Bhatt\", \"Tam@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"0988765443\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Tamana\",\"Bhatt\", \"Tam@gmail.com\",\"randomstring\",  \"0988765443\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 25667900,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 50099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tamana",
      "offset": 13
    },
    {
      "val": "Bhatt",
      "offset": 22
    },
    {
      "val": "Tam@gmail.com",
      "offset": 31
    },
    {
      "val": "randomstring",
      "offset": 47
    },
    {
      "val": "tanish",
      "offset": 62
    },
    {
      "val": "tanish",
      "offset": 75
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25500164000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0988765443",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2236776500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2238598200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3392895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6876894499,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 5235926200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tamana",
      "offset": 76
    },
    {
      "val": "Bhatt",
      "offset": 85
    },
    {
      "val": "Tam@gmail.com",
      "offset": 94
    },
    {
      "val": "randomstring",
      "offset": 110
    },
    {
      "val": "0988765443",
      "offset": 127
    },
    {
      "val": "772",
      "offset": 141
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 147
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 195
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2005083800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "duration": 2104036800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "duration": 3555209000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2016413700,
  "status": "passed"
});
formatter.after({
  "duration": 1206389100,
  "status": "passed"
});
formatter.before({
  "duration": 6477948200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 140330600,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3812708300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2018043501,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 67,
      "value": "#Integer in Name feild"
    }
  ],
  "line": 68,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Taext12\",\"Bhat12\", \"Tam@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"9876543210\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Taext12\",\"Bhat12\", \"Tam@gmail.com\",\"randomstring\",  \"9876543210\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 23819199,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 48399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taext12",
      "offset": 13
    },
    {
      "val": "Bhat12",
      "offset": 23
    },
    {
      "val": "Tam@gmail.com",
      "offset": 33
    },
    {
      "val": "randomstring",
      "offset": 49
    },
    {
      "val": "tanish",
      "offset": 64
    },
    {
      "val": "tanish",
      "offset": 77
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25464710600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543210",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2241518801,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2119661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3230286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6413463000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4252916400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Taext12",
      "offset": 76
    },
    {
      "val": "Bhat12",
      "offset": 86
    },
    {
      "val": "Tam@gmail.com",
      "offset": 96
    },
    {
      "val": "randomstring",
      "offset": 112
    },
    {
      "val": "9876543210",
      "offset": 129
    },
    {
      "val": "772",
      "offset": 143
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 149
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 197
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2017174200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "duration": 2197894900,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "duration": 4089957700,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2014111700,
  "status": "passed"
});
formatter.after({
  "duration": 1220779500,
  "status": "passed"
});
formatter.before({
  "duration": 17985702599,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 131825001,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4472907500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2011069000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 70,
      "value": "#Special symbols in username field"
    }
  ],
  "line": 71,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Text\",\"You\", \"Text@gmail.com\",\"Texttomebwou_.21\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"3456899\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"grt\",\"oi\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Text\",\"You\", \"Text@gmail.com\",\"Texttomebwou_.21\",  \"3456899\" ,\"772\",\"grt\",\"oi\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 17685500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 47001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 13
    },
    {
      "val": "You",
      "offset": 20
    },
    {
      "val": "Text@gmail.com",
      "offset": 27
    },
    {
      "val": "Texttomebwou_.21",
      "offset": 44
    },
    {
      "val": "tanish",
      "offset": 63
    },
    {
      "val": "tanish",
      "offset": 76
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25004935700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3456899",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2235318701,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2219319300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3340550299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "grt",
      "offset": 19
    },
    {
      "val": "oi",
      "offset": 25
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6663693001,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 6594889300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 76
    },
    {
      "val": "You",
      "offset": 83
    },
    {
      "val": "Text@gmail.com",
      "offset": 90
    },
    {
      "val": "Texttomebwou_.21",
      "offset": 107
    },
    {
      "val": "3456899",
      "offset": 128
    },
    {
      "val": "772",
      "offset": 139
    },
    {
      "val": "grt",
      "offset": 145
    },
    {
      "val": "oi",
      "offset": 151
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2016136800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "duration": 2190383400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "duration": 3972525901,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2013448400,
  "status": "passed"
});
formatter.after({
  "duration": 1140733100,
  "status": "passed"
});
formatter.before({
  "duration": 9368346300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 161025301,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3967616500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2020035400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 73,
      "value": "#Alphanumeric and special characters at code field"
    }
  ],
  "line": 74,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Tamana\",\"Bhatt\", \"Tam@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"987654221\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"Abc@%772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Tamana\",\"Bhatt\", \"Tam@gmail.com\",\"randomstring\",  \"987654221\" ,\"Abc@%772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 11262300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 41601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tamana",
      "offset": 13
    },
    {
      "val": "Bhatt",
      "offset": 22
    },
    {
      "val": "Tam@gmail.com",
      "offset": 31
    },
    {
      "val": "randomstring",
      "offset": 47
    },
    {
      "val": "tanish",
      "offset": 62
    },
    {
      "val": "tanish",
      "offset": 75
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25391957799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987654221",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2255519599,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2234578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3377368500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc@%772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 24
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 72
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6516981900,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4215576300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tamana",
      "offset": 76
    },
    {
      "val": "Bhatt",
      "offset": 85
    },
    {
      "val": "Tam@gmail.com",
      "offset": 94
    },
    {
      "val": "randomstring",
      "offset": 110
    },
    {
      "val": "987654221",
      "offset": 127
    },
    {
      "val": "Abc@%772",
      "offset": 140
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 151
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 199
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2023996201,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "duration": 2184888400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "duration": 4221977901,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2015926700,
  "status": "passed"
});
formatter.after({
  "duration": 1188156500,
  "status": "passed"
});
formatter.before({
  "duration": 43974325600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 149945099,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3975164201,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2018375999,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 76,
      "value": "#FirstName and Last Name"
    },
    {
      "line": 78,
      "value": "#Special symbols in firstname and lastname fields"
    }
  ],
  "line": 79,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"@#$%^\u0026\",\"You\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"987654321\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"@#$%^\u0026\",\"You\", \"Text@gmail.com\",\"randomstring\",  \"987654321\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 14003200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 31901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026",
      "offset": 13
    },
    {
      "val": "You",
      "offset": 22
    },
    {
      "val": "Text@gmail.com",
      "offset": 29
    },
    {
      "val": "randomstring",
      "offset": 46
    },
    {
      "val": "tanish",
      "offset": 61
    },
    {
      "val": "tanish",
      "offset": 74
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25344936499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987654321",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2222095400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2236559200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3392070601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6782204201,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4449536799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%^\u0026",
      "offset": 76
    },
    {
      "val": "You",
      "offset": 85
    },
    {
      "val": "Text@gmail.com",
      "offset": 92
    },
    {
      "val": "randomstring",
      "offset": 109
    },
    {
      "val": "987654321",
      "offset": 126
    },
    {
      "val": "772",
      "offset": 139
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 145
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 193
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2021329600,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:412)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"@#$%^\u0026\",\"You\", \"Text@gmail.com\",\"randomstring\",  \"987654321\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1134305600,
  "status": "passed"
});
formatter.before({
  "duration": 8592366800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 130508199,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3773424300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2017653400,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Text\",\"@#$%^\u0026\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"9876543210\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Text\",\"@#$%^\u0026\", \"Text@gmail.com\",\"randomstring\",  \"9876543210\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 15729101,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 13
    },
    {
      "val": "@#$%^\u0026",
      "offset": 20
    },
    {
      "val": "Text@gmail.com",
      "offset": 30
    },
    {
      "val": "randomstring",
      "offset": 47
    },
    {
      "val": "tanish",
      "offset": 62
    },
    {
      "val": "tanish",
      "offset": 75
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25277072400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543210",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2260027000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2218526700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3268086900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6659655000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4496977100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Text",
      "offset": 76
    },
    {
      "val": "@#$%^\u0026",
      "offset": 83
    },
    {
      "val": "Text@gmail.com",
      "offset": 93
    },
    {
      "val": "randomstring",
      "offset": 110
    },
    {
      "val": "9876543210",
      "offset": 127
    },
    {
      "val": "772",
      "offset": 141
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 147
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 195
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2023912200,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:412)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Text\",\"@#$%^\u0026\", \"Text@gmail.com\",\"randomstring\",  \"9876543210\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1188207000,
  "status": "passed"
});
formatter.before({
  "duration": 10438445900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 156119800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4218556299,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2018365000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 81,
      "value": "#More than 100 characters in firstname and last name fields"
    }
  ],
  "line": 82,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"9876543210\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja\", \"Text@gmail.com\",\"randomstring\",  \"9876543210\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 24367399,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 13
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja",
      "offset": 128
    },
    {
      "val": "Text@gmail.com",
      "offset": 243
    },
    {
      "val": "randomstring",
      "offset": 260
    },
    {
      "val": "tanish",
      "offset": 275
    },
    {
      "val": "tanish",
      "offset": 288
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25715413100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876543210",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2170375800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2215578900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3347949899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6561209200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4593403100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 76
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja",
      "offset": 191
    },
    {
      "val": "Text@gmail.com",
      "offset": 306
    },
    {
      "val": "randomstring",
      "offset": 323
    },
    {
      "val": "9876543210",
      "offset": 340
    },
    {
      "val": "772",
      "offset": 354
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 360
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 408
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2011813001,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:432)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusja\", \"Text@gmail.com\",\"randomstring\",  \"9876543210\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1234231400,
  "status": "passed"
});
formatter.before({
  "duration": 8104768099,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 144071000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 5052477700,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2025167400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 85,
      "value": "#Email"
    },
    {
      "line": 87,
      "value": "#More than 100 characters at Email field"
    }
  ],
  "line": 88,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Sdf\",\"Red\", \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"1234567890\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"1234\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Sdf\",\"Red\", \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com\",\"randomstring\",  \"1234567890\" ,\"1234\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 25754501,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdf",
      "offset": 13
    },
    {
      "val": "Red",
      "offset": 19
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com",
      "offset": 26
    },
    {
      "val": "randomstring",
      "offset": 151
    },
    {
      "val": "tanish",
      "offset": 166
    },
    {
      "val": "tanish",
      "offset": 179
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25545734300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2275628201,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2245324001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3275216500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 20
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 68
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6558647400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 7924269301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdf",
      "offset": 76
    },
    {
      "val": "Red",
      "offset": 82
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com",
      "offset": 89
    },
    {
      "val": "randomstring",
      "offset": 214
    },
    {
      "val": "1234567890",
      "offset": 231
    },
    {
      "val": "1234",
      "offset": 245
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 252
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 300
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2030993699,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:439)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Sdf\",\"Red\", \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan@gmail.com\",\"randomstring\",  \"1234567890\" ,\"1234\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1209012400,
  "status": "passed"
});
formatter.before({
  "duration": 6976335601,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 135635300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3784805701,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2029189301,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 90,
      "value": "#Phone"
    },
    {
      "line": 92,
      "value": "#More than 12 characters at Phone field"
    }
  ],
  "line": 93,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"123456790987654321123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"123456790987654321123\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 22286500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 13
    },
    {
      "val": "tyu",
      "offset": 21
    },
    {
      "val": "Text@gmail.com",
      "offset": 28
    },
    {
      "val": "randomstring",
      "offset": 45
    },
    {
      "val": "tanish",
      "offset": 60
    },
    {
      "val": "tanish",
      "offset": 73
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25411265500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456790987654321123",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2283841700,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2238745301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3352886700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6515990801,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4552717400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 76
    },
    {
      "val": "tyu",
      "offset": 84
    },
    {
      "val": "Text@gmail.com",
      "offset": 91
    },
    {
      "val": "randomstring",
      "offset": 108
    },
    {
      "val": "123456790987654321123",
      "offset": 125
    },
    {
      "val": "772",
      "offset": 150
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 156
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 204
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2043487001,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:446)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"123456790987654321123\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1225358999,
  "status": "passed"
});
formatter.before({
  "duration": 8055363800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 135653701,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 6696146100,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2025156800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 94,
      "value": "#Special symbols at phone number field"
    }
  ],
  "line": 95,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"!@$%\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"!@$%\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 27793301,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 781900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 13
    },
    {
      "val": "tyu",
      "offset": 21
    },
    {
      "val": "Text@gmail.com",
      "offset": 28
    },
    {
      "val": "randomstring",
      "offset": 45
    },
    {
      "val": "tanish",
      "offset": 60
    },
    {
      "val": "tanish",
      "offset": 73
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25394407899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@$%",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2218869400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2208315100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3157908800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6584551200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 5124194400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 76
    },
    {
      "val": "tyu",
      "offset": 84
    },
    {
      "val": "Text@gmail.com",
      "offset": 91
    },
    {
      "val": "randomstring",
      "offset": 108
    },
    {
      "val": "!@$%",
      "offset": 125
    },
    {
      "val": "772",
      "offset": 133
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 139
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 187
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2019598100,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:418)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"!@$%\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1241798300,
  "status": "passed"
});
formatter.before({
  "duration": 13632302400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 158393500,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4877473100,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2028053301,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#Alphabetic characters at Phone number field"
    }
  ],
  "line": 97,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"abcderf\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"abcderf\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 22621300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 69999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 13
    },
    {
      "val": "tyu",
      "offset": 21
    },
    {
      "val": "Text@gmail.com",
      "offset": 28
    },
    {
      "val": "randomstring",
      "offset": 45
    },
    {
      "val": "tanish",
      "offset": 60
    },
    {
      "val": "tanish",
      "offset": 73
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25108661100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcderf",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2243560200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2216723299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3433344000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "772",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 19
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 67
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6841903600,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 5972769900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 76
    },
    {
      "val": "tyu",
      "offset": 84
    },
    {
      "val": "Text@gmail.com",
      "offset": 91
    },
    {
      "val": "randomstring",
      "offset": 108
    },
    {
      "val": "abcderf",
      "offset": 125
    },
    {
      "val": "772",
      "offset": 136
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 142
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 190
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2025062899,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:469)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"abcderf\" ,\"772\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1227869500,
  "status": "passed"
});
formatter.before({
  "duration": 7963193801,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 135556400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 4336735100,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2027187701,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 99,
      "value": "#Code"
    },
    {
      "line": 101,
      "value": "#More than 100 character at code field"
    }
  ],
  "line": 102,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"1234567890\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"1234567890\" ,\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 15099000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 13
    },
    {
      "val": "tyu",
      "offset": 21
    },
    {
      "val": "Text@gmail.com",
      "offset": 28
    },
    {
      "val": "randomstring",
      "offset": 45
    },
    {
      "val": "tanish",
      "offset": 60
    },
    {
      "val": "tanish",
      "offset": 73
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25233425100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2255616600,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2228659400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3379193801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 13
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 128
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 176
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 7001216200,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4670787700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 76
    },
    {
      "val": "tyu",
      "offset": 84
    },
    {
      "val": "Text@gmail.com",
      "offset": 91
    },
    {
      "val": "randomstring",
      "offset": 108
    },
    {
      "val": "1234567890",
      "offset": 125
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 139
    },
    {
      "val": "https://spt.skype.com/en/faq/FA10858you-there",
      "offset": 254
    },
    {
      "val": "https://www.linkedin.com/in/abc-dr-a23a18b/",
      "offset": 302
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2029644399,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:453)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"1234567890\" ,\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"https://spt.skype.com/en/faq/FA10858you-there\",\"https://www.linkedin.com/in/abc-dr-a23a18b/\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1114570500,
  "status": "passed"
});
formatter.before({
  "duration": 9936076200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 161745701,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 3885324001,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2657239399,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 104,
      "value": "#Skype and linkedInURL"
    },
    {
      "line": 106,
      "value": "#More than 100 characters at skype and linkedInURL fields"
    }
  ],
  "line": 107,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"1234567890\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"12344\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"1234567890\" ,\"12344\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 23526700,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 13
    },
    {
      "val": "tyu",
      "offset": 21
    },
    {
      "val": "Text@gmail.com",
      "offset": 28
    },
    {
      "val": "randomstring",
      "offset": 45
    },
    {
      "val": "tanish",
      "offset": 60
    },
    {
      "val": "tanish",
      "offset": 73
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 25224834301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2102271900,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2214152601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3308322899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12344",
      "offset": 13
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 21
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 136
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 7239892000,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4806536101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teret",
      "offset": 76
    },
    {
      "val": "tyu",
      "offset": 84
    },
    {
      "val": "Text@gmail.com",
      "offset": 91
    },
    {
      "val": "randomstring",
      "offset": 108
    },
    {
      "val": "1234567890",
      "offset": 125
    },
    {
      "val": "12344",
      "offset": 139
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 147
    },
    {
      "val": "tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan",
      "offset": 262
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2039405200,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:461)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Teret\",\"tyu\", \"Text@gmail.com\",\"randomstring\",  \"1234567890\" ,\"12344\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\",\"tusjansfmvmdklfgrttyuuiooplkjhhgffddsxvzbxmcmsncjhgncjfheuguhifcehgfryewxntyyueuhhjdfncfgsygcuyejfukqmaldjtusjan\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1175886800,
  "status": "passed"
});
formatter.before({
  "duration": 9448088799,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Automation signup and navigate to registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks on sign up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User navigates to registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 137857800,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_sign_up_link()"
});
formatter.result({
  "duration": 5151404300,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2024901499,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 109,
      "value": "#Special characters at skype and LinkedInURL fields"
    }
  ],
  "line": 110,
  "name": "Automation of registration page for successfull login",
  "description": "",
  "id": "elearning-registration;automation-of-registration-page-for-successfull-login;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@Successful_registration_verification"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User clicks on what you want to do field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "User enters \"Sdf\",\"Red\", \"Text@gmail.com\",\"randomstring\",\"tanish\" and \"tanish\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User enters \"1234567890\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks on dropdown button of language",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User search with \"eng\" and selects language",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User enters \"1234\",\"@%$\",\"@#$\"",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User navigates to the Home page after successfully entering the details as \"Sdf\",\"Red\", \"Text@gmail.com\",\"randomstring\",  \"1234567890\" ,\"1234\",\"@%$\",\"@#$\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    6,
    8,
    9,
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User clicks profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User clicks on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User navigates to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "registrationdefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "duration": 14947400,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_what_you_want_to_do_field()"
});
formatter.result({
  "duration": 24001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdf",
      "offset": 13
    },
    {
      "val": "Red",
      "offset": 19
    },
    {
      "val": "Text@gmail.com",
      "offset": 26
    },
    {
      "val": "randomstring",
      "offset": 43
    },
    {
      "val": "tanish",
      "offset": 58
    },
    {
      "val": "tanish",
      "offset": 71
    }
  ],
  "location": "registrationdefination.user_enters_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24867120201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 13
    }
  ],
  "location": "registrationdefination.user_enters(String)"
});
formatter.result({
  "duration": 2268196499,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_dropdown_button_of_language()"
});
formatter.result({
  "duration": 2271136299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eng",
      "offset": 18
    }
  ],
  "location": "registrationdefination.user_search_with_and_selects_language(String)"
});
formatter.result({
  "duration": 3335248899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 13
    },
    {
      "val": "@%$",
      "offset": 20
    },
    {
      "val": "@#$",
      "offset": 26
    }
  ],
  "location": "registrationdefination.user_enters(String,String,String)"
});
formatter.result({
  "duration": 6538972001,
  "status": "passed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 4995980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sdf",
      "offset": 76
    },
    {
      "val": "Red",
      "offset": 82
    },
    {
      "val": "Text@gmail.com",
      "offset": 89
    },
    {
      "val": "randomstring",
      "offset": 106
    },
    {
      "val": "1234567890",
      "offset": 123
    },
    {
      "val": "1234",
      "offset": 137
    },
    {
      "val": "@%$",
      "offset": 144
    },
    {
      "val": "@#$",
      "offset": 150
    }
  ],
  "location": "registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2015793500,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.registrationdefination.user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(registrationdefination.java:424)\r\n\tat ✽.Then User navigates to the Home page after successfully entering the details as \"Sdf\",\"Red\", \"Text@gmail.com\",\"randomstring\",  \"1234567890\" ,\"1234\",\"@%$\",\"@#$\"(registrationpage.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "registrationdefination.user_clicks_profile_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_clicks_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "registrationdefination.user_navigates_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1202099900,
  "status": "passed"
});
});