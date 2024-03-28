/* Immediate invoked function Expressions
runs as soon as it is defined */

function iifs() {
  try {
    
    // invoking
    (function () {
      var message = 'immediate invoked function expression is called';
      console.log(`${message}`);
    })();


    
    /* 
    above expression is equal to 
     */


    // Function declaration 
    function x() {
        var message = 'Named function message';
        console.log(`${message} called invoked`);
     }

     x();

    //  or

    //  function expression returning value equal to a function
    var y = () => {
        var message = 'Arrow function message';
        console.log(`${message} invoked`);
     };

     y();
     
    //  trying to get message from outside

     
    console.log(`${message} called from outisde`);
    // ReferenceError: message is not defined
   
  } catch (err) {
    console.log(err);
  }
}


iifs();
