const quotes = [
{
  name: 'Stephen King',
  quote: 'Get busy living or get busy dying'
},
{
  name: 'John F. Kennedy',
  quote: 'Those who dare to fail miserably can achieve greatly'
},
{
  name: 'Abraham Lincoln',
  quote: 'I"m a success today because I had a friend who believed in me and I didn"t have the heart to let him down'
},
{
  name: 'Leonardo Da Vinci',
  quote: 'It had long come to my attention that people of accomplishment rarely sat back and things happen to them they went out and happened to things.!'
},
{
  name: 'Leo Tolstoy',
  quote: 'If you want to be happy, be'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
  let random = Math.floor(Math.random()*quotes.length);
  //console.log('random number: '+random);
  quoteAuthor.innerHTML = quotes[random].name;
  quote.innerHTML = quotes[random].quote;
}
