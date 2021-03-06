function addition(valueA, valueB) {
  var calculator = new Calculator()
  var addition = new Addition()

  calculator.setOperation(addition)
  return calculator.calculate(valueA, valueB)
}

function subtraction(valueA, valueB) {
  var calculator = new Calculator()
  var subtraction = new Subtraction()

  calculator.setOperation(subtraction)
  return calculator.calculate(valueA, valueB)
}

function multiplication(valueA, valueB) {
  var calculator = new Calculator()
  var multiplication = new Multiplication()

  calculator.setOperation(multiplication)
  return calculator.calculate(valueA, valueB)
}

function division(valueA, valueB) {
  var calculator = new Calculator()
  var division = new Division()

  calculator.setOperation(division)
  return calculator.calculate(valueA, valueB)
}

function exponentiation(valueA, valueB) {
  var calculator = new Calculator()
  var exponentiation = new Exponentiation()

  calculator.setOperation(exponentiation)
  return calculator.calculate(valueA, valueB)
}

function calculate(operation) {
  var valueA = parseFloat(document.getElementById('valueA').value)
  var valueB = parseFloat(document.getElementById('valueB').value)

  verifyValues(valueA, valueB)
  document.getElementById('response').innerHTML = operation(valueA, valueB)
}

function verifyValues(valueA, valueB) {
  if (isNaN(valueA) && isNaN(valueB)) {
    document.getElementById('alert').style.display = 'block'
    document.getElementById('alert-message').innerHTML = 'O primeiro e o segundo valor são inválidos.'
  } else if (isNaN(valueA)) {
    document.getElementById('alert').style.display = 'block'
    document.getElementById('alert-message').innerHTML = 'O primeiro valor é inválido.'
  } else if (isNaN(valueB)) {
    document.getElementById('alert').style.display = 'block'
    document.getElementById('alert-message').innerHTML = 'O segundo valor é inválido.'
  } else { document.getElementById('alert').style.display = 'none' }
}