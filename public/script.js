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
  let messages = document.getElementById('messages');
  let newmess = document.createElement('li');

  if (data.type == "img") {
    let img = document.createElement("img");
    img.src = data.content
    messages.appendChild(img);
  } 

  console.log(data)
  newmess.innerText = data.user + ": " + data.mess
  messages.append(newmess)
});




// ------------   GIPHY  ---------------- //
const url = "https://api.giphy.com/v1/gifs/search";
const apiKey = "bBZrIS5GzD5jGLAAg0CfqgcgGNlgWDN2";
const inputValue = document.getElementById("m")
const button = document.getElementById("button")
const gif = document.getElementById("gifList").url

async function giphy() {

  const response = await fetch(url);
  const data = await response.json();
  let item = data[Math.floor(Math.random() * data.length)];
  return data[item].images.downsized_small.url
}


button.addEventListener('click', async function(){
  if(inputValue.value == "/giphy") {
    const img_url = await giphy();
    socket.emit('chat message', {
      type: "img",
      content: img_url,
      user: user
    });  
    inputValue.value = "";  
  } else {
      let mess = document.getElementById('m').value;
      socket.emit('chat message', {
        type: "text",
        content: mess,
        user: user
      });
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
  /*  giphy.onclick = function () {        
        inputValue.value = '/giphy'
        giphy.style.display = 'none'
      }*/
  } else {
      giphy.style.display = 'none'
  }
};