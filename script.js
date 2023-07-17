// let name = prompt("Enter your name")
// console.log("hello" + " " + name);

// let a = prompt(1);
// let b = prompt(2);
// let number = parseInt(a)+parseInt(b);
// console.log(number);
// alert(number);

// let a = prompt("enter the number, grater than 100");;
// while (true) {

//   if (a > 100) {
//     console.log(a);
//     break;
//   } else {
//     a = prompt("Valid number entered:");
//     console.log("Valid number entered:", number);
//   }
// }

// let num=prompt("enter number");
// if (num > 0) {
//   alert("number is grater than 0");
// }
// else if (num == 0) {
//   alert("number is equal to 0");
// } 
// else if (num < 0) {
//   alert("number is less than 0");
// } else {
//     alert ("enter number!!!!")
// }




// let login = prompt("enter value")
// let message = login == 'Employee'? alert('Hello') : login == 'Director' ? alert('Greetings') : login == '' ?  alert('No login') : alert('');


let sum1 = prompt("enter the number");
let sum2 = prompt("enter the power of number");
let sum;
function pow(x,n) {
    sum=x**n

    return sum
}

// document.write(pow(sum1, sum2), alert(sum));
console.log(pow(sum1, sum2));
alert(sum)

