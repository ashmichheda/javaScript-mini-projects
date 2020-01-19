const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
let counter = 0;


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);

function nextSlide(){

  if(counter == 3){
    counter = -1;
  }
  counter++;
  console.log("Value of counter: "+counter);
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
}

function previousSlide(){

  if(counter == -1){
    counter = 3;
  }
  counter--;
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
}
