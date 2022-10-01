console.log('hello world')

function add(numOne, numTwo) {
	let total = numOne + numTwo
	console.log(total)
}
function subtract(numOne, numTwo) {
	let total = numOne - numTwo
	console.log(total)
}
function multiply(numOne, numTwo) {
	let total = numOne * numTwo
	console.log(total)
}
function divide(numOne, numTwo) {
	let total = numOne / numTwo
	console.log(total)
}

function operate(numOne, operator, numTwo) {
	const action = String(operator)
	if (action === '+') {
		add(numOne, numTwo)
	} else if (action === '-') {
		subtract(numOne, numTwo)
	} else if (action === '*') {
		multiply(numOne, numTwo)
	} else if (action === '/') {
		divide(numOne, numTwo)
	}
}

// function clearDisplay() {
// 	let display = document.getElementById('display')
// 	let clearDisplay = (display.innerHTML = [])
// 	display = clearDisplay
// }

// function equalButton() {}

// function inputToDisplay() {
// 	let displayInput = []
// 	let input = document.getElementsByClassName('button').value
// 	displayInput.unshift(input)
// }
