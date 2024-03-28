function iifs() {
    try {
      // Encapsulate your code in an IIFE to prevent polluting the global scope.
      (function () {
        var message = 'Immediate Invoked Function Expression is called';
        console.log(`${message}`);
      })();
  
      // Use meaningful function names to improve code readability.
      function namedFunction() {
        var message = 'Named function message';
        console.log(`${message} called and invoked`);
      }
  
      namedFunction(); // Call the named function.
  
      // Use const or let instead of var for variable declarations to adhere to modern JavaScript standards.
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
  