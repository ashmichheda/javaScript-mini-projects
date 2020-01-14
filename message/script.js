const sentBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener('click', sendMsg);

function sendMsg(){
  let message = messageIn.value;
  if(message == ''){
    alert('Please enter valid message!');
  }
  else{
    console.log("Entered message: "+message);
    messageOut.innerHTML = message;
    messageIn.value = '';
  }

}
