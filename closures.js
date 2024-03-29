const GLOBAL_MESSAGE = 'Can be accessed everywhere';

function closures() {
  var outsideMessage = 'message outside IIFE'(function () {
    var insideMessage = 'message inside IIFE';
    console.log(outsideMessage); // variables can be accessed if declared in outerscope
  });

  console.log(insideMessage); // variables cannot be accessed if declared in innerscope
}

function sayHello() {
  var message = 'hello world';

  console.log(message);
}
