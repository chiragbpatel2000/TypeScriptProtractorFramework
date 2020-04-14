
import { registrationresultpage } from '../pageObjects/registrationresultpage.po';



describe("registration result page ", function(){

    it("verifying registration result page", function(){
        let registrationresultPage = new registrationresultpage();
        expect(registrationresultPage.verifyTextRegistration.getText()).toEqual("Your registration completed");
    })

})