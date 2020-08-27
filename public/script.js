var socket = io();
let user = ""

/*
let submitFunction = function(event){

  let mess = document.getElementById('m').value;
  socket.emit('chat message', {user, mess});
  console.log(user)
  document.getElementById('m').value = " "

}
*/

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

socket.on('chat message', (data) => {
  console.log(data)
  let messages = document.getElementById('messages');
  let newmess = document.createElement('li');
  newmess.innerText = data.user + ": " + data.mess
  messages.append(newmess)

});




// ------------   GIPHY  ---------------- //
const url = "https://api.giphy.com/v1/gifs/search";
const apiKey = "bBZrIS5GzD5jGLAAg0CfqgcgGNlgWDN2";
const inputValue = document.getElementById("m")
const button = document.getElementById("button")

button.addEventListener('click', function(){
if(inputValue.value == "/giphy") {
  async function giphy() {

    const response = await fetch(url);
    const data = await response.json();

    socket.emit('chat message', {
      // here -> inputvalue? data.q? vet inte?!
});  
  }
  giphy();
  inputValue.value = "";
} else {
    let mess = document.getElementById('m').value;
    socket.emit('chat message', {user, mess});
    document.getElementById('m').value = " "
  } 
  inputValue.value = "";
});



// Function that checks and show/hide

function showHide() {
  const inputValue = document.getElementById("m");

  if (inputValue.value == '/') {
    const giphy = document.getElementById('giphy')
    giphy.style.display = 'block'
    giphy.onclick = function () {        
        inputValue.value = '/giphy'
        giphy.style.display = 'none'
      }
  } else {
      giphy.style.display = 'none'
  }
};