// Named functions//
function square(num) {
    return num * num;
}
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  
  function printMessage(message) {
    console.log(message);
  }
  
  
  console.log("Square of 4: " + square(4));                  // Output: 16
  console.log("25°C in Fahrenheit: " + celsiusToFahrenheit(25)); // Output: 77
  console.log("Is 7 even? " + isEven(7));                    // Output: false
  printMessage("Hello, World!");                             // Output: Hello, World!
  