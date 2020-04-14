"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class registerpage {
    //verifyTextRegistration:ElementFinder=element(by.className("result"));
    constructor() {
        this.registerButton = protractor_1.element(protractor_1.by.id("register-button"));
        this.registerLink = protractor_1.element(protractor_1.by.className("ico-register"));
        this.genderradioButton = protractor_1.element(protractor_1.by.id("gender-male"));
        this.firstNameBox = protractor_1.element(protractor_1.by.id("FirstName"));
        this.lastNameBox = protractor_1.element(protractor_1.by.id("LastName"));
        this.emailBox = protractor_1.element(protractor_1.by.id("Email"));
        this.companyName = protractor_1.element(protractor_1.by.id("Company"));
        this.newsletterCheckBox = protractor_1.element(protractor_1.by.id("Newsletter"));
        this.passwordBox = protractor_1.element(protractor_1.by.id("Password"));
        this.confirmpasswordBox = protractor_1.element(protractor_1.by.id("ConfirmPassword"));
        this.registerButton = protractor_1.element(protractor_1.by.id("register-button"));
    }
}
exports.registerpage = registerpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJwYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvcmVnaXN0ZXJwYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXNEO0FBRXRELE1BQWEsWUFBWTtJQVlyQix1RUFBdUU7SUFFdkU7UUFIQSxtQkFBYyxHQUFpQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBSzdELElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FpREo7QUEzRUQsb0NBMkVDIn0=