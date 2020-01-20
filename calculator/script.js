const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');


// whatever buttons are selected, loop over it
for(let i = 0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    let number = btns[i].getAttribute('data-num');
    screen.value += number;
  })
}

equalBtn.addEventListener('click', function(){
  if(screen.value == ''){
    alert('Input is empty');
  }
  else{
    // evaluates the expression, Performs the add/divide/multiply/divide operations
    let value = eval(screen.value);
    screen.value = value;

  }
})

clearBtn.addEventListener('click', function(){
  screen.value = '';
})
