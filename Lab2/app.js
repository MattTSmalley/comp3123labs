var ft = require('./sportsteam');
var calc = require('./calculate')
var com = require('./comparer')

// set module property
ft.teamname = 'Leafs';
ft.teamname2 = 'Raptors';

num1 = 5;
num2 = 5;

// call module method
ft.Cheer();
ft.Boo();
console.log("Comparing two numbers: " + num1 + "," + num2)

if (com.AreNumberEqual()){
    console.log("Numbers are equal\nAdding two numbers");
    console.log(calc.Add());
}
else{
    console.log("Numbers are not equal\nSubtracting two numbers");
    console.log(calc.Subract());
};