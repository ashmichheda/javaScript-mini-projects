// Selecting button
const colorBtn = document.querySelector('.colorButton');
const bodyBcg = document.querySelector('body');

// Declare an array of colors
const colors = ['yellow', 'red', 'blue', 'green', '#5b6698'];

// Use event listner to change color on select button
colorBtn.addEventListener('click', changeColor);


function changeColor(){

  let random = Math.floor(Math.random()*colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
