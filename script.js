 function add() {
  var num1;
  var num2;
  var result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1); //  converts to number "1" => 1 (number)

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 + num2;

  document.getElementById('out').innerHTML += result;
}

function substract() {
  var num1;
  var num2;
  var result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 - num2;

  document.getElementById('out').innerHTML += result;
}

function multiply() {
  var num1;
  var num2;
  var result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 * num2;

  document.getElementById('out').innerHTML += result;
}

function divide() {
  var num1;
  var num2;
  var result;
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);

  result = num1 / num2;

  document.getElementById('out').innerHTML += result;
}

