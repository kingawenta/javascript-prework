var argButtonName, buttonTest, x, buttonRock, buttonScissors, buttonPaper;

/**
 * function buttonClicked(argButtonName) {
 */
function buttonClicked(argButtonName, buttonRock, buttonScissors, buttonPaper) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  console.log(buttonPaper + ' Papier został kliknięty');
  console.log(buttonRock + ' Kamień został kliknięty');
  console.log(buttonScissors + ' Nożyce zostały kliknięte');
}
var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * function getMoveName(argMoveId){
 *   if(argMoveId == 1){
 *     return 'kamień';
 *   } else {
 * printMessage('Nie znam ruchu o id ' + argMoveId
 * + '. Zakładam, że chodziło o "kamień".');
 *     return 'kamień';
 *   }
 * }
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * function displayResult(argPlayerMove, argComputerMove){
 * if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
 *     printMessage('Wygrywasz!');
 *   } else {
 *     printMessage('Przegrywasz :(');
 *   }
 *
 * printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
 * }
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
buttonTest = document.getElementById('button-test');
buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST', 'kamień', 'nożyce', 'papier'); });
