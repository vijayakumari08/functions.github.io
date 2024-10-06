
        // Anonymous function //
        const multiply = function(a, b) {
            return a * b;
        };

        
        const result = multiply(4, 5);
        console.log("The result of the multiplication is:", result);  

    
        setTimeout(function() {
            console.log("This message appears after 2 seconds.");
        }, 2000);