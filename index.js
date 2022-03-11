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


let saveEl = document.getElementById("save-btn")
let countEl =  document.getElementById("count-el")
let count = 0;

console.log(saveEl);


function increment() {
      count = count + 1;
      countEl.textContent = count 
}


function save() {
      let countStr = count + " - "
      saveEl.textContent+= countStr
     
}

function decrement() {
      if(count < 0 ) {
            return 0;
      }else {
       count = count - 1;
       return countEl.innerText = count + 1 
      }    
}



// let welcomeEl = document.getElementById("welcome-el")

// let name = "Logan"
// let greeting = "Wolverine "

// welcomeEl.innerText = greeting + name 






 