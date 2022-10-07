// let display = document.getElementById('display')

// let buttons = Array.from(document.getElementsByClassName('button'))

// buttons.map((button) => {
// 	button.addEventListener('click', (e) => {
// 		switch (e.target.innerText) {
// 			case 'C':
// 				display.innerText = ''
// 				break

// 			case '=':
// 				test(display.innerText)
// 				break

// 			default:
// 				display.innerText += e.target.innerText
// 		}
// 	})
// })

// // function setValAndPlus() {
// // 	let value = display.innerText
// // 	display.innerText = ''
// // 	return value
// // }

// function operate(string) {
// 	let operatorIndex = string.indexOf('+', '=', '-', 'x')
// 	console.log(operatorIndex)
// 	let valTwo = string.slice(operatorIndex + 1)
// 	// console.log(valTwo)
// 	let valOne = string.slice(0, string.indexOf(operatorIndex - operatorIndex))
// 	// console.log(valOne)

// 	let operator = ''
// 	if (string.includes('+')) {
// 		operator = '+'
// 	} else if (string.includes('-')) {
// 		operator = '-'
// 	} else if (string.includes('/')) {
// 		operator = '/'
// 	} else if (string.includes('x')) {
// 		operator = 'x'
// 	}

// 	let finalValue = 0

// 	if (operator === '+') {
// 		finalValue = valOne + valTwo
// 	} else if (operator === '-') {
// 		finalValue = valOne - valTwo
// 	} else if (operator === '*') {
// 		finalValue = valOne * valTwo
// 	} else if (operator === '/') {
// 		finalValue = valOne / valTwo
// 	}
// }

// function test(innerText) {
// 	let input = innerText
// 	let result = Function('return ' + input)()

// 	console.log(result)
// }
