const inputField = document.getElementById('input-field');
const calculateBtn = document.getElementById('calculate-btn');

const buttonDelete = document.getElementById('button-delete');

const listContainer = document.getElementById('history-list');

const clearHistory = document.getElementById('clear-history-btn');
let previousCalcs = []; 

let expression = null;
let answer = 0;

const charToAppend = (char) => {
    inputField.value += char
}

const clearDisplay = () => inputField.value = ""

buttonDelete.addEventListener("click",() => {
    let inputString = inputField.value.toString()
    let deleteLastChar = inputString.substring(0,inputField.value.length - 1)
    inputField.value = deleteLastChar;
})

calculateBtn.addEventListener("click", () => {
    expression = inputField.value
    if(!!eval(expression)){
        answer = eval(expression);
        inputField.value = answer
        previousCalcs.push({expression: `${expression}`, answer: `${answer}`})
        console.log(previousCalcs);
        
        const listItem = document.createElement('li');
        listItem.textContent = `${expression} = ${answer}`;
        listContainer.appendChild(listItem);
    } 
})

clearHistory.addEventListener("click", () => {
    listContainer.replaceChildren();
    previousCalcs.length = 0;
    console.log(previousCalcs);
})
