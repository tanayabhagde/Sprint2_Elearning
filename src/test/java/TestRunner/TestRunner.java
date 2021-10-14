package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="src/test/java/Feature"
,glue= {"StepDefination","hooks"},
dryRun = false,
monochrome = true,
//tags= {"@Registration,@Successful_registration_verification"}
tags= {" @Validation_Message"}
//tags= {"@Successful_registration_verification"}
//tags= {"@Verification_of_Displayed_Images"}
//tags= {"@login"}
//tags= {"@Forgot_Password"}
//tags= {"@Login_Validation"}

		)

public class TestRunner {
	
	

}
