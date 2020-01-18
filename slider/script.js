const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');
let counter = 0;


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', previousSlide);

function nextSlide(){
  //counter.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
  if(counter == 3){
    counter = -1;
  }
  counter++;
  console.log("Value of counter: "+counter);
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
}

function previousSlide(){
//  counter.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1000, fill:'forwards'});
  if(counter == -1){
    counter = 3;
  }
  counter--;
  container.style.backgroundImage = `url(img/bcg-${counter}.jpeg`;
}
