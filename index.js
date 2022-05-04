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

// let age = 100

// // if less than 100 -> "Not eligible"
// // else if exactly -> "Here is your birthday card from the king!"
// //  else           -> "Not eligible,you have already gotten one"


// if(age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not eligible,you have already gotten one")
// }



// [BlackJack Game]


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById('cards-el')

// * store the message-el paragraph in a variable called messageEl

// Write the conditional according to the rules:

//  if less than or equal to 20 -> "Do you want to draw a new card"
//  else if exactly 21 -> "wohoo! you've got Blackjack!"
//  else -> "You're out of the game!"
// adding hasBlackJack variable
//  add the isAlive variable 
//  1. Create a variable called isAlive and assign it to true

//  2. Flip its value to false in the appropraite code block

// 3. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.



function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// No between 1 to 13 - no of cards in a game

function getRandomCard() {
    // if 1  -> return 11
    // if 11-13 -> return 10
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if(randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }else {
        return randomNumber
    }
}



function renderGame() {
    cardsEl.textContent = "Cards: " 
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    }else if (sum === 21) {
        message = "wohoo! you've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
   messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackjack === false ){
        let card = getRandomCard()
        sum+= card
        cards.push(card)
        renderGame()
    }
}

// //  // CASH OUT!

// console.log(hasBlackJack);
// console.log(isAlive);







// Practice : [Boolean(True,False) Conditions]


// console.log(4 === 3) //false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) //true
// console.log(3 <= 2) // false





// Arrays(Practice) - ordered lists of items 

// let featuredPosts = [
//     "Check out my Netflix clone",//0
//     "Here's the code for my project",//1
//     "I've just relaunched my portfolio"//2
// ]

// // find the array length 

// console.log(featuredPosts.length);//3

// Create an array that lists your i.e. experience,education,licenses,skills or similar
//  the items of the array should be strings

// let arr = [
//     'CEO',
//     'Frontend Developer',
//     'React'
// ]

// // Make the following appear in the console:

// console.log(arr[0]);
// console.log(arr[1]);



//[2] : 

//  Array - ordered list of items - coposite/complex data type

// Create an array that describes yourself. use the three primitive data types you've learned
//  It should contain your name (string),your age (number), and whether you like pizza (boolean)

// let complexDataType = [
//    'Fiction',
//    23,
//    true
// ]


// let changes = [7, 4]

// changes.push(6);
// console.log(changes)//add at the end

// changes.pop();
// console.log(changes)//remove from the end

// changes.unshift(9);
// console.log(changes)// add at the front 

// changes.shift();
// console.log(changes);//remove from the front


// for loop 

// for (let count = 1; count < 11; count +=1) {
//     console.log(count);
// }



// Example 

// create a for loop that counts from 10 to 100 in steps of 10
//  use console.log to log out the numbers


// for (let i = 10; i <= 100; i+=10) {
//     console.log(i);
// }



// let sentence = ['Hello', 'my', 'name', 'is', 'Per']
// let greetingEl = document.getElementById('greeting-el')

// //  render the sentence in the greetingEl paragraph using a for loop and .textContent

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }


// 

// let player1Time = 102
// let player2Time = 107 

// function getFastestRaceTime() {
//     if(player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace);


// function getTotalRaceTime() {
//     return player1Time + player2Time
// }


// let totalTime = getTotalRaceTime()
// console.log(totalTime);



// let randomNumber = Math.random() * 6
// console.log(randomNumber);


// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber);

// let randomNumber = Math.floor( Math.random() * 6)
// console.log(randomNumber);


// Create a function, rollDice(), that returns a random number between 1 and 6


// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice());



//  Logical operator (&&)


// let hasCompletedCourse = true
// let givesCertificate = true


// if(hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log('Generating certificate...')
// }





//  Logical operator (||)-when both are false then ir will not run the
//  generateCertificate function

// let hasCompletedCourse = true
// let givesCertificate = true


// if(hasCompletedCourse === false || givesCertificate === false) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log('Generating certificate...')
// }