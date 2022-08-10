const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clears]')
const previousButtonsText = document.querySelector('[data-previous]')
const currentButtonsText = document.querySelector('[data-current]')

class Calculator {
  constructor(previousButtonsText, currentButtonsText) {
    this.previousButtonsText = previousButtonsText
    this.currentButtonsText = currentButtonsText
    this.clear()
  }

  calculate() {
    let result

    const _previousOperand = parseFloat(this.previousOperand)
    const _currentOperand = parseFloat(this.currentOperand)

    if (isNaN(_previousOperand) || isNaN(_currentOperand)) return

    switch (this.operation) {
      case '+':
        result = _previousOperand + _currentOperand
        break
      case '-':
        result = _previousOperand - _currentOperand
        break
      case '/':
        result = _previousOperand / _currentOperand
        break
      case '*':
        result = _previousOperand * _currentOperand
        break
      default:
        return
    }

    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ''
  }

  choseOperation(operation) {
    if (this.currentOperand === '') return

    if (this.previousOperand !== '') {
      this.calculate()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  appendNumber(number) {
    if (this.currentOperand.includes('.') && number === '.') return

    this.currentOperand = `${this.currentOperand}${number.toString()}`
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  updateDisplay() {
    this.previousButtonsText.innerText = `${this.previousOperand} ${
      this.operation || ''
    }`
    this.currentButtonsText.innerText = this.currentOperand
  }
}

const calculator = new Calculator(previousButtonsText, currentButtonsText)

for (const numberButton of numberButtons) {
  numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText)
    calculator.updateDisplay()
  })
}

for (const operationButton of operationButtons) {
  operationButton.addEventListener('click', () => {
    calculator.choseOperation(operationButton.innerText)
    calculator.updateDisplay()
  })
}

// Button AC
allClearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})

// Result
equalsButtons.addEventListener('click', () => {
  calculator.updateDisplay()
  calculator.calculate()
})
