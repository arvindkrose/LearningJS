function addNumbers(n1, n2) {
    var n3 = n1 + n2;
    return n3;
}
var num1 = prompt("Enter num1", "Enter first nuumber here");
var num2 = prompt("Enter num2", "Enter second number here");
var result = addNumbers(parseInt(num1), parseInt(num2)); //parseInt is used coz prompt function return string type and treat input data as string so if two numbers are added they will get contatenated but not added properly.
alert("Total is " + result);