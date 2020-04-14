import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ './tests/homepage.js' ,'./tests/registerpage.js','./tests/registrationresultpage.js' ],
 // seleniumAddress: 'http://localhost:4444/wd/hub',
 directConnect:true

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  
};