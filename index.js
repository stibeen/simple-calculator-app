const inputField = document.getElementById('input-field');
const calculateBtn = document.getElementById('calculate-btn');
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
const buttonAdd = document.getElementById("button-add");
const buttonSubtract = document.getElementById("button-subtract");
const buttonMultiply = document.getElementById("button-multiply");
const buttonDivide = document.getElementById("button-divide");
let expression = null;

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

buttonAdd.addEventListener("click", () => inputField.value += "+")
buttonSubtract.addEventListener("click", () => inputField.value += "-")
buttonMultiply.addEventListener("click", () => inputField.value += "*")
buttonDivide.addEventListener("click", () => inputField.value += "/")

calculateBtn.addEventListener("click", () => {
    expression = inputField.value
    inputField.value = eval(expression)
})