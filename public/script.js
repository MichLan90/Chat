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
    let img = document.createElement("iframe");
    img.src = data.content
    newmess.innerText = data.user + ": "
    messages.append(newmess)
    messages.appendChild(img);
  } else {
    newmess.innerText = data.user + ": " + data.content
    messages.append(newmess)
  }

});




// ------------   GIPHY  ---------------- //
const api_key = "bBZrIS5GzD5jGLAAg0CfqgcgGNlgWDN2";
const url = "https://api.giphy.com/v1/gifs/search?q=laugh&api_key=bBZrIS5GzD5jGLAAg0CfqgcgGNlgWDN2";
const inputValue = document.getElementById("m")
const button = document.getElementById("button")


async function giphy() {

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  let item = data.data[Math.floor(Math.random() * data.data.length)];
  console.log(item.embed_url);
  return item.embed_url
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
      document.getElementById('m').value = ""
    } 
    inputValue.value = "";
});



function showHide(){
  
  let divtohide = document.getElementById('showhide');
  let input = document.getElementById('m').value
  console.log(input)

  if (input == "/") {
    document.getElementById('showhide').className = "b";
    
  }else if (input == "/g") {
    document.getElementById('showhide').className = "b";
    
  }else if (input == "/gi") {
    document.getElementById('showhide').className = "b";
    
  }else if (input == "/gip") {
    document.getElementById('showhide').className = "b";
    
  }else if (input == "/giph") {
    document.getElementById('showhide').className = "b";
    
  }else if (input == "/giphy") {
    document.getElementById('showhide').className = "b";
    
  }else {
    document.getElementById('showhide').className = "a";
   
  }

}

function select(){
  console.log("asd")
  document.getElementById('m').value = "/giphy"
}

// Function that checks and show/hide
/*
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
*/