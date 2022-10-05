console.log('hello world')

let currentNum = ''
let previousNum = ''
let operator = ''

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

function operate(string) {
	const valOne = string.split
	const operator = string.slice(string.indexOf('+'))
	// string.includes('+') ||
	// string.includes('-') ||
	// string.includes('/') ||
	// string.includes('x')
	const valTwo = string.split
	console.log(operator)

	if (operator === '+') {
		add(previousNum, currentNum)
	} else if (operator === '-') {
		subtract(previousNum, currentNum)
	} else if (operator === '*') {
		multiply(previousNum, currentNum)
	} else if (operator === '/') {
		divide(previousNum, currentNum)
	}
}
let display = document.getElementById('display')

let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map((button) => {
	button.addEventListener('click', (e) => {
		switch (e.target.innerText) {
			case 'C':
				display.innerText = ''
				break
			case '=':
				operate(display.innerText)
				break
			default:
				display.innerText += e.target.innerText
		}
	})
})
