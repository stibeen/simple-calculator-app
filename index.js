const inputField = document.getElementById('input-field');
const calculateBtn = document.getElementById('calculate-btn');
const openParenthesesBtn = document.getElementById('open-parentheses-btn');
const closeParenthesesBtn = document.getElementById('close-parentheses-btn');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const buttonFour = document.getElementById('button-four');
const buttonFive = document.getElementById('button-five');
const buttonSix = document.getElementById('button-six');
const buttonSeven = document.getElementById('button-seven');
const buttonEight = document.getElementById('button-eight');
const buttonNine = document.getElementById('button-nine');
const buttonZero = document.getElementById('button-zero');
const buttonClear = document.getElementById('button-clear');
const buttonDelete = document.getElementById('button-delete');
const buttonAdd = document.getElementById("button-add");
const buttonSubtract = document.getElementById("button-subtract");
const buttonMultiply = document.getElementById("button-multiply");
const buttonDivide = document.getElementById("button-divide");
let expression = null;

const pTag = document.getElementById('text-content')

openParenthesesBtn.addEventListener("click", () => inputField.value += "(")
closeParenthesesBtn.addEventListener("click", () => inputField.value += ")")

buttonZero.addEventListener("click", () => inputField.value += "0")
buttonOne.addEventListener("click", () => inputField.value += "1")
buttonTwo.addEventListener("click", () => inputField.value += "2")
buttonThree.addEventListener("click", () => inputField.value += "3")
buttonFour.addEventListener("click", () => inputField.value += "4")
buttonFive.addEventListener("click", () => inputField.value += "5")
buttonSix.addEventListener("click", () => inputField.value += "6")
buttonSeven.addEventListener("click", () => inputField.value += "7")
buttonEight.addEventListener("click", () => inputField.value += "8")
buttonNine.addEventListener("click", () => inputField.value += "9")
buttonClear.addEventListener("click", () => inputField.value = "")
buttonDelete.addEventListener("click",() => {
    let inputString = inputField.value.toString()
    let deleteLastChar = inputString.substring(0,inputField.value.length - 1)
    inputField.value = deleteLastChar;
    
})

buttonAdd.addEventListener("click", () => inputField.value += "+")
buttonSubtract.addEventListener("click", () => inputField.value += "-")
buttonMultiply.addEventListener("click", () => inputField.value += "*")
buttonDivide.addEventListener("click", () => inputField.value += "/")

calculateBtn.addEventListener("click", () => {
    expression = inputField.value
    if(!!eval(expression)){
        inputField.value = eval(expression)
    } 
})
