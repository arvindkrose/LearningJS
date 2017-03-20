/* function addOne(x) {
    x = x++;
    alert(x);
    //return x;
} */
function addNumbers(n1,n2) {
    var n3 = n1 + n2;
    //alert(n3);
    return n3;
}
var num1=prompt("Enter num1");
var num2=prompt("Enter num2");
var result = addNumbers(num1,num2);
alert(result);


//n1 = prompt("Enter a value");
//n2 = prompt("Enter another value");
//n3 = n1 + n2;


//var toPrint;
//var value = prompt("Enter any value");
//toPrint = addOne(value);
//alert(toPrint);

/* function wheather(temp,city)
        {
            if (temp > 50)
            {
                message = city + " " + "is hot";

            }
            else
            {
                message = "COLD";
            }
            return message;
        }
                var uTemp,uCity,status;
        uTemp = prompt("Enter temperature");
        uCity = prompt("Enter city name");
        status = wheather(uTemp,uCity);
        alert(status); */

/*           function bark(name, weight) {
        
        if (weight > 20) {
            console.log(name + " "+"says WOOF WOOF");
        } else {
            console.log(name + " " +"says woof woof")
        }
        
        }
        bark("arvind", 21);
        bark("gaur", 18);*/