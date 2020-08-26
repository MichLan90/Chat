var socket = io();


let user = ""

let submitFunction = function(event){

  let mess = document.getElementById('m').value;
  socket.emit('chat message', {user, mess});
  console.log(user)
  document.getElementById('m').value = " "

}

let addUser = function(){
    let uservalue = document.getElementById('u');
    let mybutt = document.getElementById('b')
    let userinput = uservalue.value
    if (uservalue.style.display === "none") {
        uservalue.style.display = "block";
        mybutt.style.display = "block";
      } else {
        uservalue.style.display = "none";
        mybutt.style.display = "none";
      }

    user = userinput
    console.log(user)
}

/* $('form').submit(function(e){
e.preventDefault(); // prevents page reloading
socket.emit('chat message', $('#m').val());
$('#m').val('');
return false;
}); */

socket.on('chat message', (data) => {
  console.log(data)
  let messages = document.getElementById('messages');
  let newmess = document.createElement('li');
  newmess.innerText = data.user + ": " + data.mess
  messages.append(newmess)

});

