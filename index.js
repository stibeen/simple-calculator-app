const inputField = document.getElementById('input-field');
const listContainer = document.getElementById('history-list');

let previousCalcs = []; 
let expression = null;
let answer = 0;

const charToAppend = (char) => {
    inputField.value += char
}

const clearDisplay = () => inputField.value = ""

const deleteChar = () => {
    let inputString = inputField.value.toString()
    let deleteLastChar = inputString.substring(0,inputField.value.length - 1)
    inputField.value = deleteLastChar;
}

const calculate = () => {
    expression = inputField.value
    if(!!eval(expression) || !0){
        answer = eval(expression);
        inputField.value = answer
        previousCalcs.push({expression: `${expression}`, answer: `${answer}`})
        console.log(previousCalcs);
        
        const listItem = document.createElement('li');
        listItem.textContent = `${expression} = ${answer}`;
        listContainer.appendChild(listItem);
    } 
}

const clearHistory = () => {
    listContainer.replaceChildren();
    previousCalcs.length = 0;
    console.log(previousCalcs);
}
