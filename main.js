//  build in modules we have  path,http,os
//  const os =  require('os')

//  const user = os.userInfo()
//  console.log(user)

//  methods returns the system uptime in second

// console.log(`the system uptime is ${os.uptime()} seconds`)
  
//  const currentOS = {
// name:os.type(),
// release:os.release(),
// totalmem:os.totalmem(),
// freemem:os.freemem(),

//  }
//  console.log(currentOS)

//  other built in modules

// var http = require('http');
var dt = require('./myfirstmodule');

console.log(`The current date and time is: ${dt.myDateTime()}`); // Call the function from the module

 
