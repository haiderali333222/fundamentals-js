function iifs() {
    try {


      // Encapsulate your code in an IIFE to prevent polluting the global scope.
      (function () {
        var message = 'Immediate Invoked Function Expression is called';
        console.log(`${message}`);
      })();


    //   The above expression is equal to 

  
      // function declaration
      function namedFunction() {
        var message = 'Named function message';
        console.log(`${message} called and invoked`);
      }
  
      namedFunction(); // Call the named function.
  
      // function expression
      const arrowFunction = () => {
        var message = 'Arrow function message';
        console.log(`${message} invoked`);
      };
  
      arrowFunction(); // Call the arrow function.
  
      // Accessing 'message' outside its scope will result in a ReferenceError since it's not defined in this context.
      console.log('Trying to access message from outside:', message);
    } catch (err) {
      console.error(err); // Log any errors that occur.
    }
  }
  
  // Call the iifs function to execute the code.
  iifs();
  