import { ElementFinder,by,element } from "protractor";

export class registerpage 
{
    registerLink:ElementFinder;
    genderradioButton:ElementFinder;
    firstNameBox:ElementFinder;
    lastNameBox:ElementFinder;
    emailBox:ElementFinder;
    companyName:ElementFinder;
    newsletterCheckBox:ElementFinder;
    passwordBox:ElementFinder;
    confirmpasswordBox:ElementFinder;
    registerButton:ElementFinder = element(by.id("register-button"));
    //verifyTextRegistration:ElementFinder=element(by.className("result"));

    constructor(){

        this.registerLink=element(by.className("ico-register"));
        this.genderradioButton = element(by.id("gender-male"));
        this.firstNameBox= element(by.id("FirstName"));
        this.lastNameBox= element(by.id("LastName"));
        this.emailBox= element(by.id("Email"));
        this.companyName = element(by.id("Company"));
        this.newsletterCheckBox= element(by.id("Newsletter"));
        this.passwordBox= element(by.id("Password"));
        this.confirmpasswordBox= element(by.id("ConfirmPassword"));
        this.registerButton= element(by.id("register-button"));
    }

    // clickOntheRegistrationDetails():void
    // {
    //    this.registerLink; 
    // };

    // selectCheckgenderBox():any
    // {
    //     this.genderradioButton;
    // };
    // enterFirstName():any
    // {
    //     this.firstNameBox;
    // };
    // enterLastName():any
    // {
    //     this.lastNameBox;
    // };
    // enterEmail():any
    // {
    //     this.emailBox;
    // };
    // enterCompnayName():any
    // {
    //     this.companyName;
    // };
    // checkBoxnewsletter():any
    // {
    //     this.newsletterCheckBox;
    // };
    // enterPasswordBox():any
    // {
    //     this.passwordBox;
    // };
    // enterConfirmPassword():any
    // {
    //     this.confirmpasswordBox;
    // };
    // clickOnRegisterButton():any
    // {
    //     this.registerButton;
    // };
    // verifytheRegistration():any
    // {
    //     this.verifyTextRegistration;
        
    // }

}