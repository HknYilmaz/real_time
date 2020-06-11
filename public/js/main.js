const socket = io();
const chatForm = document.getElementById('chat-form');

socket.on("message" ,mesaj => {
    console.log(mesaj);
    
})

chatForm.addEventListener('submit',e=> {
  e.preventDefault();

  const msg = e.target.elements.msg.value;
  socket.emit('chat',msg);
  console.log(msg);
  
});