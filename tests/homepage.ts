import {browser} from 'protractor';
describe("nop commerce store test suite", function(){

     browser.ignoreSynchronization = true; //non agular or agular website

     browser.manage().window().maximize();

    it("navigate to home page and get the title of page",function(){
         
     browser.get("https://demo.nopcommerce.com/");
     browser.getTitle().then(function(title){
         console.log("The current page title is " + title);
     })
    })


})
