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


let username = "DK";
let lastname = "verma"

function Name() {
  const fullName = username + ' ' + lastname
  console.log(fullName);
}

Name ();



let countEl =  document.getElementById("count-el")
console.log(countEl.innerText);//0

let count = 0;

function increment() {
      count = count + 1;
      countEl.innerText = count 
}


function save() {
      console.log(count);
}

function decrement() {
      if(count < 0 ) {
            return 0;
      }else {
       count = count - 1;
       return countEl.innerText = count + 1 
      }    
}






 