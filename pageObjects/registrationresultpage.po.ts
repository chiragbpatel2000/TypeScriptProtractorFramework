import { element, ElementFinder,by } from 'protractor';


export class registrationresultpage
{
    verifyTextRegistration:ElementFinder;

    constructor()
    {
      this.verifyTextRegistration=element(by.className("result"));
    }
}