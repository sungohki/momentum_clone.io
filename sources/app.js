
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
// console.log(calculator.add(10, 2));
// console.log(calculator.minus(10, 2));
// console.log(calculator.multiply(10, 2));
// console.log(calculator.divide(10, 2));
// console.log(calculator.powerof("hi", 2));

const age = prompt("How old are you?");
// console.log("Your age is " + age + parseInt(age) + typeof(parseInt(age)));
if (isNaN(age))
    console.log("NaN : Please write a number");
else
    console.log("Thank you for writing your age correctly ==> " + age);