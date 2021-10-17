package StepDefination;

import org.testng.AssertJUnit;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.asserts.SoftAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;
import junit.framework.Assert;


public class registrationdefination {
	
	WebDriver driver =hooksclass.driver;
	
	
	
	@Given("^User is on Elearning Application$")
	public void user_is_on_Elearning_Application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.manage().window().maximize();
	}
	
	

	@When("^User clicks on sign up link$")
	public void user_clicks_on_sign_up_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//a[contains(text(),'Sign up!')]")).click();
			Thread.sleep(2000);
			System.out.println("User is able click on signup page");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able click on signup page"+e);
				AssertJUnit.fail();
			}
	    
	}

	@Then("^User navigates to registration page$")
	public void user_navigates_to_registration_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			
			String expected="My Organization - My education - Registration";
			String actual= driver.getTitle();
		
			AssertJUnit.assertEquals(expected,actual);
			Thread.sleep(2000);
			System.out.println("User is able to navigate on Registration page");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to navigate on Registration page"+e);
				AssertJUnit.fail();
			}
	    
	}
	@Then("^User verify the Image of follow course is display or not$")
	public void user_verify_the_Image_of_follow_course_is_display_or_not() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		try 
		{
			boolean img1= driver.findElement(By.xpath("//input[@value='5']")).isDisplayed();
			System.out.println("User is able to see Image of follow course "+img1);
			
		}
		catch(Exception e)
		{
			System.out.println("User is not able to see Image of follow course "+e);
			AssertJUnit.fail();
		}
	    
	}

	@Then("^User verify the Image of Teach course is display or not$")
	public void user_verify_the_Image_of_Teach_course_is_display_or_not() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try 
		{
			boolean img2= driver.findElement(By.xpath("//input[@value='1']")).isDisplayed();
			System.out.println("User is able to see Image of Teach course "+img2);
		}
		catch(Exception e)
		{
			System.out.println("User is not able to see Image of Teach course"+e);
			AssertJUnit.fail();
		}
	    
	}
	


	@When("^User clicks on what you want to do field$")
	public void user_clicks_on_what_you_want_to_do_field() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^User enters \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String fn, String ln, String email, String un, String pass, String cpass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		try
		{
			if(fn.equals("blank"))
			{
				fn = fn.replaceAll(fn," ");
				System.out.println("User does not enter firstname ");
				
			}
			if(ln.equals("blank"))
			{
				ln = ln.replaceAll(ln," ");
				System.out.println("User does not enter lastname ");
				
			}

			if(email.equals("blank"))
			{
				email = email.replaceAll(email," ");
				System.out.println("User does not enter email ");
				
			}
			if(un.equals("blank"))
			{
				un = un.replaceAll(un," ");
				System.out.println("User does not enter username ");
				
			}
			if(un.equals("randomstring"))
			{
				
				int n =5;
				String alphaNumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz"+ "1234567890";
				String temp = new String();
				for(int i=0;i<n;i++)
				{
					int index = (int)(alphaNumericChars.length() * Math.random());
					temp +=alphaNumericChars.charAt(index);
				}
				System.out.println(temp);
				//un=temp;
				String rs=un+temp;
				System.out.println(rs);
				
				
				un = un.replaceAll(un,rs);
				System.out.println("User name as RandomString ");
				
			}
			
			
			/*int n =5;
			String alphaNumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz"+ "1234567890";
			String temp = new String();
			for(int i=0;i<n;i++)
			{
				int index = (int)(alphaNumericChars.length() * Math.random());
				temp +=alphaNumericChars.charAt(index);
			}
			System.out.println(temp);
			//un=temp;
			String rs=un+temp;
			System.out.println(rs);
			*/
			driver.findElement(By.name("firstname")).sendKeys(fn);
			Thread.sleep(4000);
			driver.findElement(By.name("lastname")).sendKeys(ln);
			Thread.sleep(4000);
			driver.findElement(By.name("email")).sendKeys(email);
			Thread.sleep(4000);
			driver.findElement(By.name("username")).sendKeys(un);
			Thread.sleep(4000);
			driver.findElement(By.name("pass1")).sendKeys(pass);
			Thread.sleep(4000);
			driver.findElement(By.name("pass2")).sendKeys(cpass);
			Thread.sleep(4000);
			
			System.out.println("User is able to enter firstname,lastname,email,username,password,confirm password details");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to enter firstname,lastname,email,username,password,confirm password details"+e);
				AssertJUnit.fail();
			}
		
	    
	    
	}

	
	@Then("^User enters \"([^\"]*)\"$")
	public void user_enters(String pn) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			driver.findElement(By.name("phone")).sendKeys(pn);
			Thread.sleep(2000);
			System.out.println("User is able to enter phone number");
			
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to enter phone number "+e);
				AssertJUnit.fail();
			}
		
	    
	}

	@Then("^User clicks on dropdown button of language$")
	public void user_clicks_on_dropdown_button_of_language() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//span[@class='caret']")).click();
			Thread.sleep(2000);
			System.out.println("User is able click on dropdown list of language");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able click on dropdown list of language"+e);
				AssertJUnit.fail();
			}
		
	   
	}

	@Then("^User search with \"([^\"]*)\" and selects language$")
	public void user_search_with_and_selects_language(String ch) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			
			driver.findElement(By.xpath("//div[@class='bs-searchbox']//child::input[1]")).sendKeys(ch);
			Thread.sleep(2000);
			driver.findElement(By.xpath("//span[contains(text(),'English')]")).click();
	    	Thread.sleep(1000);
	    	//driver.findElement(By.xpath("//span[contains(text(),'Bosanski')]")).click();
	    	//Thread.sleep(1000);
	    	
	    	
	    	System.out.println("User is able to select search language from drop down list ");
	    	
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to search language from drop doen list "+e);
				AssertJUnit.fail();
				
			}
	    
		
	    
	}

	@Then("^User enters \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_enters(String code, String skype, String lurl) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			
			
			driver.findElement(By.name("official_code")).sendKeys(code);
			Thread.sleep(2000);
			driver.findElement(By.name("extra_skype")).sendKeys(skype);
			Thread.sleep(2000);
			driver.findElement(By.name("extra_linkedin_url")).sendKeys(lurl);
			Thread.sleep(2000);
			
			System.out.println("User is able to enter code, skype,linkedin url");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to enter code, skype,linkedin url"+e);
				AssertJUnit.fail();
			}
	    
	}


@Then("^User clicks on Register button$")
	public void user_clicks_on_Register_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.name("submit")).click();
			Thread.sleep(2000);
			System.out.println("User is able to click on Register button");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to click on Register button"+e);
			}
	   
	}
	

	@Then("^User gets \"([^\"]*)\" message$")
	public void user_gets_message(String validation) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			String actText="a";
			if(validation.equals("Required field"))
			{
				
				String replacement= driver.findElement(By.xpath("//div[contains(text(),'Required field')]")).getText();
				actText=actText.replaceAll(actText, replacement);
				
			}
			else if(validation.equals("The email address is not complete or contains some invalid characters"))
			{
				String replacement= driver.findElement(By.xpath("//div[contains(text(),'The email address is not complete or contains some invalid characters')]")).getText();
				actText=actText.replaceAll(actText, replacement);
				
			}
			else if(validation.equals("This login is already in use"))
			{
				String replacement= driver.findElement(By.xpath("//div[contains(text(),'This login is already in use')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			else if(validation.equals("The login needs to be maximum 50 characters long"))
			{
				String replacement= driver.findElement(By.xpath("//div[contains(text(),'The login needs to be maximum 50 characters long')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			
			else if(validation.equals("Your login can only contain letters, numbers and _.-"))
			{
				String replacement= driver.findElement(By.xpath("//div[contains(text(),'Your login can only contain letters, numbers and _.-')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			
			else if(validation.equals("You have typed two different passwords"))
			{
				String replacement= driver.findElement(By.xpath("//div[contains(text(),'You have typed two different passwords')]")).getText();
				actText=actText.replaceAll(actText, replacement);
			}
			
			boolean result= actText.equals(validation);
			if(result==true)
			{
				System.out.println("User gets a validation message "+actText);
			}
			else
			{
				System.out.println("User got registered successfully ");
			}
			
			SoftAssert obj = new SoftAssert();
			AssertJUnit.assertEquals(actText, validation);
			Thread.sleep(2000);
			//Assert.fail();
			obj.assertAll();
		}
		
		catch(Exception e)
		{
			System.out.println("User is not able to Register"+e);
			AssertJUnit.fail();
		}
		
	    
	}

	
	
	
	@Then("^User navigates to the Home page after successfully entering the details as \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",  \"([^\"]*)\" ,\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_navigates_to_the_Home_page_after_successfully_entering_the_details_as(String fn, String ln, String email, String un, String pn, String code, String skype, String lurl) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			
			String expected ="My Organization - My education - Registration"; 
			String actual= driver.getTitle();
					
			AssertJUnit.assertEquals(expected,actual);
			Thread.sleep(2000);
			System.out.println("User is able to navigate to Registration acknowledgment page");
			
			
			

			
			String regex ="[!@#^$%&*()_+=|<>?{}\\[\\]~-]";
			if((fn.matches("["+ regex +"]+"))||(ln.matches("["+regex+"]+")))
			{
				System.out.println("Invalid: Special characters at first name and last name field");
				Assert.fail();
			}
			
			if((pn.matches("["+regex+"]+")))
			{
				System.out.println("Invalid: Special characters at phone field");
				Assert.fail();
			}
			
			if((skype.matches("["+regex+"]+"))||(lurl.matches("["+regex+"]+")))
			{
				System.out.println("Invalid: Special characters at skype and linkedinURL");
				Assert.fail();
			}
			
			
			if(fn.length()>100||ln.length()>100)
		
				{
					System.out.println("Invalid: Characters more than 100 at first name and last name field");
					Assert.fail();
				}
			
			if(email.length()>100)
				
			{
				System.out.println("Invalid: Characters more than 100 at email field");
				Assert.fail();
			}
			
			if(pn.length()>12)
				
			{
				System.out.println("Invalid: Characters more than 12 at phone Number field");
				Assert.fail();
			}
			
			if(code.length()>100)
				
			{
				System.out.println("Invalid: Characters more than 100 at code field");
				Assert.fail();
			}
			
			
			if(skype.length()>100||lurl.length()>100)
				
			{
				System.out.println("Invalid: Characters more than 100 at skype and linkedinURL");
				Assert.fail();
			}
			
			
				
			String regex1 ="[ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]";
			if((pn.matches("["+ regex1 +"]+"))){
				System.out.println("Invalid: Alphabetic characters at phone number field");
				Assert.fail();
			}
			
			
		}
		catch(Exception e)
		{
			System.out.println("User is not able to navigate to Registration acknowledgment page"+e);
			Assert.fail();
		}
	}
	
	@When("^User clicks profile icon$")
	public void user_clicks_profile_icon() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.className("img-circle")).click();
			Thread.sleep(2000);
			System.out.println("User is able to click on profile icon");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to click on profile icon"+e);
				 Assert.fail();
			}
	}

	@When("^User clicks on log out link$")
	public void user_clicks_on_log_out_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.xpath("//a[@id='logout_button']")).click();
			Thread.sleep(2000);
			System.out.println("User is able click on Logout");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able click on Logout"+e);
				 Assert.fail();
			}

	    
	}

	@Then("^User navigates to login page$")
	public void user_navigates_to_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			
			String expected="My Organization - My education";
			String actual= driver.getTitle();
			Thread.sleep(2000);
		
			AssertJUnit.assertEquals(expected,actual);
			System.out.println("User is able to navigate to Login page");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to navigate to Login page"+e);
				Assert.fail();
			}
	    
	    
	}
	

	
	


	



}
