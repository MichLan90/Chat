var socket = io();


let submitFunction = function(event){

let mess = document.getElementById('m');
socket.emit('chat message', mess.value);

}



/* $('form').submit(function(e){
e.preventDefault(); // prevents page reloading
socket.emit('chat message', $('#m').val());
$('#m').val('');
return false;
}); */

socket.on('chat message', (msg) => {
let messages = document.getElementById('messages');
let newmess = document.createElement('li');
newmess.innerText = msg
messages.append(newmess)

});

