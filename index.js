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

add(1, 2)
subtract(3, 2)
multiply(2, 2)
divide(4, 2)

operate(1, '+', 2)
