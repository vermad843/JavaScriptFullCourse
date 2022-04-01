// Mathematical
// let firstNumber = 5;
// let secondNumber = 7;
// let add = firstNumber + secondNumber;
// let subtract = firstNumber - secondNumber;
// let multiply = firstNumber * secondNumber;
// let divide = firstNumber / secondNumber;

// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);


// let username = "DK";
// let lastname = "verma"

// function Name() {
//   const fullName = username + ' ' + lastname;
//   console.log(fullName);
// }

// Name ();

//[x] Counter app

// let saveEl = document.getElementById("save-btn")
// let countEl =  document.getElementById("count-el")
// let count = 0;

// console.log(saveEl);


// function increment() {
//       count = count + 1;
//       countEl.textContent = count 
// }


// function save() {
//       let countStr = count + " - "
//       saveEl.textContent+= countStr
//       countEl.textContent = 0
//       count = 0
// }

// function decrement() {
//       if(count < 0 ) {
//             return 0;
//       }else {
//        count = count - 1;
//        return countEl.textContent = count + 1 
//       }    
// }

// 

// let welcomeEl = document.getElementById("welcome-el")

// let name = "Logan"
// let greeting = "Wolverine "

// welcomeEl.innerText = greeting + name 


// [x] - varibales practice

// create two variables,firstname and lastName
//  Concatenate the two variables into a third variable called fullName
//  Log fullName to the console


// let firstname = 'Logan'
// let lastName = 'Wolverine'

// let fullName = firstname + ' ' + lastName
// console.log(fullName);


// Create a function that logs out 'Hii there,Logan wolverine' when called


// function Name() {
//       return `Hii there, ${firstname} ${lastName}`
// }

// console.log(Name());



//[x] - Increment and Decrement 

// create two functions, add3Points() and removalPoint(), and have them
// add/remove points to/from the myPoints variable

// Call the fuinctions to that the line below logs out 10


// let myPoints = 3;

// function add3Points() { 
//   myPoints = myPoints + 1
//   console.log(myPoints);
// }

// add3Points();


// function removalPoint() {
//   myPoints = myPoints - 1
//   console.log(myPoints);
// }


// removalPoint()



// console.log(myPoints);



// [x] Strings and numbers 


// console.log("2" + 2)//22
// console.log(11 + 7)//18
// console.log(6 + "5")//65
// console.log("My points: " + 5 + 9)//My points: 59
// console.log(2 + 2)//4
// console.log("11" + "14")//1114


// [x]  Rendering a error message

// when the user clicks the increment button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)


// function increment() {
//    console.log("Button Clicked");
//    errorParagraph.textContent = "Something went wrong, please try again"
// }




// let num1 = 8
// let num2 = 2


// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// // Create four functions : add(), subtract(), divide(), multiply()
// // Call the correct function when the user clicks on one of the buttons
// // perform the given calculation using num1 and num2
// // render the result of the calculation in the paragraph with id="sum-el"

// // e.g if the user clicks on the "Plus" button, you should render
// // "sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// let sumEl = document.getElementById('sum-el');
// console.log(sumEl);

// function add() {
//   let result = num1 + num2
//   sumEl.textContent = "Sum: " + result
// }


// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result 
// }

// function divide() {
//     let result = num1/num2
//     sumEl.textContent = "Sum: " + result
// }


// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }



//  1. Create two variables, firstCard and secondCard.
//  Set their values to a random number between 2-11

//  2. Create a variable,sum, and set it to the sum of the two cards

// let firstCard = 3;
// let secondCard = 5;

// let sum = firstCard + secondCard;
// console.log(sum);


// Conditions : 21, >21, <21

// if(sum < 21) {
//   console.log('Do u want to draw a new card')
// }

// else if(sum === 21) {
//     console.log('You got a blackjack')
// }

// else (sum > 21) {
//     console.log('you r out of game')
//   }


// Practice : 1

// Check if the person is old enough to enter the nightclub(21)
//  Log a suitable message to the console in both cases

// let age = 22

// //  if less then 21 -> "You can not enter the club"
// //  else  -> "welcome"


// if (age < 21) {
//     console.log("You can not enter the club");
// }

// else {
//     console.log("welcome")
// }
  


// Practice : 2 

// check if the person is eligible for a birthday card from the king!(100)

let age = 100

// if less than 100 -> "Not eligible"
// else if exactly -> "Here is your birthday card from the king!"
//  else           -> "Not eligible,you have already gotten one"


if(age < 100) {
    console.log("Not eligible")
} else if (age === 100) {
    console.log("Here is your birthday card from the king!")
} else {
    console.log("Not eligible,you have already gotten one")
}