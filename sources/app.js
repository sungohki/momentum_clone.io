
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

const age = prompt("How old are you?");
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
else
    console.log("You can do whatever you want to do.");