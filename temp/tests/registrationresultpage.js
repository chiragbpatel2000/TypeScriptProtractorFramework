"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrationresultpage_po_1 = require("../pageObjects/registrationresultpage.po");
describe("registration result page ", function () {
    it("verifying registration result page", function () {
        let registrationresultPage = new registrationresultpage_po_1.registrationresultpage();
        expect(registrationresultPage.verifyTextRegistration.getText()).toEqual("Your registration completed");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9ucmVzdWx0cGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3JlZ2lzdHJhdGlvbnJlc3VsdHBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx3RkFBa0Y7QUFJbEYsUUFBUSxDQUFDLDJCQUEyQixFQUFFO0lBRWxDLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRTtRQUNyQyxJQUFJLHNCQUFzQixHQUFHLElBQUksa0RBQXNCLEVBQUUsQ0FBQztRQUMxRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMzRyxDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=