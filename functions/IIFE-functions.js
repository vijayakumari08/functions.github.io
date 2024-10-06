  
        (function() {
            const message = "Hello from the IIFE!";
            console.log(message);
        })();

        
        (function(a, b) {
            const sum = a + b;
            console.log("The sum is:", sum);
        })(5, 10); 