var diceRandom1 = Math.random();
diceRandom1 = Math.round(diceRandom1 * 5) + 1;
var imageDiceSource = "dice" + diceRandom1 + ".png";
var player1Image = "images/" + imageDiceSource;
document.querySelector(".dice .img1").setAttribute("src", player1Image);
var diceRandom2 = Math.random();
diceRandom2 = Math.round(diceRandom2 * 5) + 1;
var imageDiceSource2 = "dice" + diceRandom2 + ".png";
var player2Image = "images/" + imageDiceSource2;
document.querySelector(".dice .img2").setAttribute("src", player2Image);
// console.log("dicee 1 : "+diceRandom1+" \n\n\tdice  2 :" + diceRandom2);
console.log("dicee 1 : " + diceRandom1 + " \n\n\tdice  2 :" + diceRandom2);
if (diceRandom1 === diceRandom2) {
  document.querySelector(".container h1").textContent = "Draw";
} else if (diceRandom1 > diceRandom2) {
  document.querySelector(".container h1").textContent = "PLayer 1 won";
}
if (diceRandom1 < diceRandom2) {
  document.querySelector(".container h1").textContent = "Player 2 Won";
}
// winner(diceRandom1,diceRandom2);
// function winner(diceRandom1, diceRandom2) {
//    if (diceRandom1 === diceRandom2) {
//  if (diceRandom1 === 1 && diceRandom2 === 1){
//         document.querySelector(".container h1").textContent="Draw";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   }
//     else if (diceRandom1 === 2 && diceRandom2 === 2){
//         document.querySelector(".container h1").textContent="Draw";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   }
//     else if (diceRandom1 === 3 && diceRandom2 === 3){
//         document.querySelector(".container h1").textContent="Draw";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   }
//     else if (diceRandom1 === 4  && diceRandom2 === 4){
//         document.querySelector(".container h1").textContent="Draw";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   }
//     else if (diceRandom1 === 5 && diceRandom2 === 5){
//         document.querySelector(".container h1").textContent="Draw";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   }
//     else if (diceRandom1 === 6 && diceRandom2 === 6){
//         document.querySelector(".container h1").textContent="Draw";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
// }

//  else if (diceRandom1 !== diceRandom2) {
//  if (diceRandom1 === 1 && diceRandom2 === 2){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   }
//     else if (diceRandom1 === 1 && diceRandom2 === 3){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   }
//     else if (diceRandom1 === 1  && diceRandom2 === 4){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   }
//     else if (diceRandom1 === 1 && diceRandom2 === 5){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   }
//     else if (diceRandom1 === 1 && diceRandom2 === 6){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
//     else if (diceRandom1 === 2 && diceRandom2 === 1){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   }
//     else if (diceRandom1 === 2 && diceRandom2 === 3){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   }
//     else if (diceRandom1 === 2  && diceRandom2 === 4){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   }
//     else if (diceRandom1 === 2 && diceRandom2 === 5){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   }
//     else if (diceRandom1 === 2 && diceRandom2 === 6){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
//     else if (diceRandom1 === 3 && diceRandom2 === 1){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   }
//     else if (diceRandom1 === 3 && diceRandom2 === 2){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   }
//     else if (diceRandom1 === 3  && diceRandom2 === 4){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   }
//     else if (diceRandom1 === 3 && diceRandom2 === 5){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   }
//     else if (diceRandom1 === 3 && diceRandom2 === 6){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
//     else if (diceRandom1 === 4 && diceRandom2 === 1){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   }
//     else if (diceRandom1 === 4 && diceRandom2 === 2){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   }
//     else if (diceRandom1 === 4  && diceRandom2 === 3){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   }
//     else if (diceRandom1 === 4 && diceRandom2 === 5){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   }
//     else if (diceRandom1 === 4 && diceRandom2 === 6){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
//     else if (diceRandom1 === 5 && diceRandom2 === 1){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   }
//     else if (diceRandom1 === 5 && diceRandom2 === 2){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   }
//     else if (diceRandom1 === 5  && diceRandom2 === 3){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   }
//     else if (diceRandom1 === 5 && diceRandom2 === 4){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   }
//     else if (diceRandom1 === 5 && diceRandom2 === 6){
//         document.querySelector(".container h1").textContent="PLayer2 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
//   }
//     else if (diceRandom1 === 6 && diceRandom2 === 1){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
//   }
//     else if (diceRandom1 === 6 && diceRandom2 === 2){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
//   }
//     else if (diceRandom1 === 6  && diceRandom2 === 3){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
//   }
//     else if (diceRandom1 === 6 && diceRandom2 === 4){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
//   }
//     else if (diceRandom1 === 6 && diceRandom2 === 5){
//         document.querySelector(".container h1").textContent="PLayer1 is won ";
//       document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
//       document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
//   }
// }

// }
