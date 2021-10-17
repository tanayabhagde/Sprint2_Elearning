package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.AssertJUnit;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksclass;
import junit.framework.Assert;

public class logindefination {
	
	WebDriver driver =hooksclass.driver;
	
	@Given("^User is on the Elearning Application$")
	public void user_is_on_the_Elearning_Application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.manage().window().maximize();
	    
	}
	
	@Then("^User verify the Icon of username is display or not$")
	public void user_verify_the_Icon_of_username_is_display_or_not() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try 
		{
			boolean icon1= driver.findElement(By.xpath("//em[@class='fa fa-user fa-fw']")).isDisplayed();
			System.out.println("User is able to see Icon of username "+icon1);
			Thread.sleep(4000);
			
		}
		catch(Exception e)
		{
			System.out.println("User is not able to see Icon of username"+e);
			AssertJUnit.fail();
		}
	    
	}

	@Then("^User verify the Icon of password is display or not$")
	public void user_verify_the_Icon_of_password_is_display_or_not() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try 
		{
			boolean icon2= driver.findElement(By.xpath("//em[@class='fa fa-lock fa-fw']")).isDisplayed();
			
			System.out.println("User is able to see Icon of password"+icon2);
			Thread.sleep(4000);
			
		}
		catch(Exception e)
		{
			System.out.println("User is not able to see Icon of password"+e);
			AssertJUnit.fail();
		}
	}



	@When("^User enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_the_and(String user, String pass) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			driver.findElement(By.name("login")).sendKeys(user);
			driver.findElement(By.name("password")).sendKeys(pass);
			
			Thread.sleep(2000);
			System.out.println("User is able to enter username and password");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to enter username and pass"+e);
				
			}
	}

	@When("^User clicks on the login button$")
	public void user_clicks_on_the_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.name("submitAuth")).click();
			Thread.sleep(2000);
			System.out.println("User is able to click on login button");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to click on login button"+e);
			}
	    
	    
	}

	@Then("^User navigates to dashboard page Successfully$")
	public void user_navigates_to_dashboard_page_Successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			
			String expected="My Organization - My education - My courses";
			String actual= driver.getTitle();
			Thread.sleep(2000);
		
			Assert.assertEquals(expected,actual);
			System.out.println("User is able to login and navigate to dashboard");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to login and navigate to dashboard"+e);
			}
	    
	    
	}
	
	@Then("^User gets validation message for invalid data$")
	public void user_gets_validation_message_for_invalid_data() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try 
		{
			boolean vm= driver.findElement(By.xpath("//div[contains(text(),'Login failed - incorrect login or password.')]")).isDisplayed();
			System.out.println("User gets validation message for 'Login failed' "+vm);
			
		}
		catch(Exception e)
		{
			System.out.println("User gets validation message for 'Login failed'"+e);
			Assert.fail();
		}
	   
	}


	@When("^User clicks on the I Lost My Password$")
	public void user_clicks_on_the_I_Lost_My_Password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		try {
			driver.findElement(By.xpath("//a[contains(text(),'I lost my password')]")).click();
			Thread.sleep(2000);
			System.out.println("User is able click on I Lost My Password ");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able click on I Lost My Password"+e);
				Assert.fail();
			}
	    
	   
	}

	@Then("^User navigates to the I Lost My Password page$")
	public void user_navigates_to_the_I_Lost_My_Password_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			
			String expected="My Organization - My education";
			String actual= driver.getTitle();
		
			Assert.assertEquals(expected,actual);
			Thread.sleep(2000);
			System.out.println("User is able to navigate on Registration page");
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to navigate on Registration page"+e);
				Assert.fail();
			}
	    
	    
	}

	@When("^User enters the details of Username or Email address at \"([^\"]*)\"$")
	public void user_enters_the_details_of_Username_or_Email_address_at(String unemail) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try
		{
			
			driver.findElement(By.name("user")).sendKeys(unemail);
			Thread.sleep(2000);
			
			System.out.println("User is able to enter username or email");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able to enter username or email"+e);
				Assert.fail();
			}
	    
	}

	@When("^User clicks on the send message button$")
	public void user_clicks_on_the_send_message_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try {
			driver.findElement(By.name("submit")).click();
			Thread.sleep(2000);
			System.out.println("User is able click on send message ");
			
			}
			
			catch(Exception e)
			{
				System.out.println("User is not able click on send message "+e);
			}
	}

	@Then("^User gets a validation message$")
	public void user_gets_a_validation_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		try 
		{
			boolean vm= driver.findElement(By.xpath("//div[contains(text(),'This platform was unable to send the email. Please contact ')]")).isDisplayed();
			System.out.println("User does not get any Email for reseting password "+vm);
			Assert.fail();
		}
		catch(Exception e)
		{
			System.out.println("User gets Email for reseting password"+e);
			
		}
	   
	}





}
