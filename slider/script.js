const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
let counter = 0;


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);

function nextSlide(){

  container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});
  if(counter == 4){
    counter = 0;
  }
  console.log("Value of counter: "+counter);
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
  counter++;
}

function previousSlide(){
  container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});
  if(counter == 0){
    counter = 3;
  }
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
  counter--;
}
