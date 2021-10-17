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
//tags= {"@Validation_Message,@Successful_registration_verification"}
//tags= {"@Verification_of_Displayed_Images"}
//tags= {" @Validation_Message"}
//tags= {"@Successful_registration_verification"}

//tags= {"@Verification_of_Displayed_Icons"}
//tags= {"@login"}
//tags= {"@Login_Validation"}
//tags= {"@Forgot_Password"}
plugin= {"pretty","html:target/cucumber-pretty" , "junit:target/report.xml", "json:target/jsonreport.json"}


		)

public class TestRunner {
	
	

}
