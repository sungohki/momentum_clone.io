
const calculator = {
    add: function(a, b){
        return (a + b);
    },
    minus: function(a, b){
        return (a - b);
    },
    multiply: function(a, b){
        return (a * b);
    },
    divide: function(a, b){
        return (a / b);
    },
    powerof: function(a, b){
        return (a ** b);
    }
};

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0)
    // using OR Operator
    console.log("NaN or Lower than 0 : Please write a number");
else if (age < 18)
    console.log("You are too young.");
else if (age >= 18 && age <= 50)
    // using AND Operator
    console.log("You can drink.");
else if (age > 50 && age <= 80)
    // using AND Operator
    console.log("You should exercise.");
else if (age !== 100 && age > 80)
    console.log("You can do whatever you want to do.");
else if (age === 100)
    // === Operator : type and value shouble correct
    // if they do, it will returns true but then don't it will returns false
    console.log("Wow, you are wise");