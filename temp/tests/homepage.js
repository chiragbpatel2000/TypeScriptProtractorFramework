"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("nop commerce store test suite", function () {
    protractor_1.browser.ignoreSynchronization = true; //non agular or agular website
    protractor_1.browser.manage().window().maximize();
    it("navigate to home page and get the title of page", function () {
        protractor_1.browser.get("https://demo.nopcommerce.com/");
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The current page title is " + title);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9ob21lcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUNuQyxRQUFRLENBQUMsK0JBQStCLEVBQUU7SUFFckMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQyw4QkFBOEI7SUFFcEUsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV0QyxFQUFFLENBQUMsaURBQWlELEVBQUM7UUFFcEQsb0JBQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUM3QyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBR04sQ0FBQyxDQUFDLENBQUEifQ==