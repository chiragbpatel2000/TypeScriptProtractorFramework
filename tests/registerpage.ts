import { browser, element,by } from 'protractor';
import { registerpage } from '../pageObjects/registerpage.po';


describe("nop commerce registration page ", function(){
    
    browser.ignoreSynchronization = true; //non agular or agular website
    browser.manage().window().maximize();
    let registrationPage;
    it("navigate to register page", function(){
        registrationPage = new registerpage();
        //browser.get("https://demo.nopcommerce.com/");
        registrationPage.registerLink.click();
        //element(by.className("ico-register")).click();
        browser.getTitle().then(function(title){
            console.log("The current page title is " + title);
        })
        
    });

    it("filling the detail on register page", function(){
       // browser.get("https://demo.nopcommerce.com/");
       // registrationPage.registerLink.click();
        //element(by.className("ico-register")).click();
        registrationPage.genderradioButton.click();
        browser.sleep(2000);
        

        //var genderradioButton = element(by.id("gender-male"));
        //genderradioButton.click();
        registrationPage.firstNameBox.sendKeys("john");
        //var firstNameBox = element(by.id("FirstName"));
        //firstNameBox.sendKeys("John");
        registrationPage.lastNameBox.sendKeys("Radcliff");
        //var lastNameBox = element(by.id("LastName"));
        //lastNameBox.sendKeys("Radcliff");
        registrationPage.emailBox.sendKeys("chiragbpa01200012001111@gmail.com");
        //var emailBox = element(by.id("Email"));
        //emailBox.sendKeys("chiragbpatel2000@gmail.com");
        registrationPage.companyName.sendKeys()
        //var companyName = element(by.id("Company"));
        //companyName.sendKeys("The Education Channel");
        registrationPage.newsletterCheckBox.click();
        //var newsletterCheckBox = element(by.id("Newsletter"));
       // newsletterCheckBox.click();
       registrationPage.passwordBox.sendKeys("AmazonID123@");
       // var passwordBox = element(by.id("Password"));
       // passwordBox.sendKeys("AmazonID123@");
       registrationPage.confirmpasswordBox.sendKeys("AmazonID123@");
       // var confirmpasswordBox = element(by.id("ConfirmPassword"));
        //confirmpasswordBox.sendKeys("AmazonID123@");
       registrationPage.registerButton.click();
       // var registerButton = element(by.id("register-button"));
       // registerButton.click();
       //expect(registrationPage.verifyTextRegistration.getText()).toEqual("Your registration completed");
       browser.sleep(6000);
        
    });

})