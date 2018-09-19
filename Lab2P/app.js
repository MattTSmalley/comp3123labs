var sports = require('./sportsteam');
var calc = require('./calculator');
var compare = require('./comparer')

sports.teamname = 'Leafs';

sports.Cheer();
sports.Boo();

num1 = 5;
num2 = 5;


console.log("Comparing two numbers: " + num1 + " " + num2);
if(compare.Compare())
{
    console.log("Numbers are equal\nAdding two numbers")
    calc.Add();
}
else{
    console.log("Numbers are not equal\nSubtracting two numbers")
    calc.Subtract();
}
