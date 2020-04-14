"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const registerpage_po_1 = require("../pageObjects/registerpage.po");
describe("nop commerce registration page ", function () {
    protractor_1.browser.ignoreSynchronization = true; //non agular or agular website
    protractor_1.browser.manage().window().maximize();
    let registrationPage;
    it("navigate to register page", function () {
        registrationPage = new registerpage_po_1.registerpage();
        //browser.get("https://demo.nopcommerce.com/");
        registrationPage.registerLink.click();
        //element(by.className("ico-register")).click();
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The current page title is " + title);
        });
    });
    it("filling the detail on register page", function () {
        // browser.get("https://demo.nopcommerce.com/");
        // registrationPage.registerLink.click();
        //element(by.className("ico-register")).click();
        registrationPage.genderradioButton.click();
        protractor_1.browser.sleep(2000);
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
        registrationPage.companyName.sendKeys();
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
        protractor_1.browser.sleep(6000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJwYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvcmVnaXN0ZXJwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWlEO0FBQ2pELG9FQUE4RDtBQUc5RCxRQUFRLENBQUMsaUNBQWlDLEVBQUU7SUFFeEMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQyw4QkFBOEI7SUFDcEUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQyxJQUFJLGdCQUFnQixDQUFDO0lBQ3JCLEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtRQUM1QixnQkFBZ0IsR0FBRyxJQUFJLDhCQUFZLEVBQUUsQ0FBQztRQUN0QywrQ0FBK0M7UUFDL0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLGdEQUFnRDtRQUNoRCxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFO1FBQ3ZDLGdEQUFnRDtRQUNoRCx5Q0FBeUM7UUFDeEMsZ0RBQWdEO1FBQ2hELGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3BCLHdEQUF3RDtRQUN4RCw0QkFBNEI7UUFDNUIsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxpREFBaUQ7UUFDakQsZ0NBQWdDO1FBQ2hDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsK0NBQStDO1FBQy9DLG1DQUFtQztRQUNuQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDeEUseUNBQXlDO1FBQ3pDLGtEQUFrRDtRQUNsRCxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdkMsOENBQThDO1FBQzlDLGdEQUFnRDtRQUNoRCxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1Qyx3REFBd0Q7UUFDekQsOEJBQThCO1FBQzlCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsZ0RBQWdEO1FBQ2hELHdDQUF3QztRQUN4QyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0QsOERBQThEO1FBQzdELDhDQUE4QztRQUMvQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsMERBQTBEO1FBQzFELDBCQUEwQjtRQUMxQixtR0FBbUc7UUFDbkcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFdkIsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQSJ9