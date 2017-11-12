


window.addEventListener("load", up);

var btn_save = document.getElementById('btn-save');
var texto = document.getElementById('listName');



//Evento para activar el botón

function up() {
    btn_tweet.addEventListener("click", send);
        texto.addEventListener("keydown", grow);
}
    
function send(list) {
    list.preventDefault();
    var text = listName.value;
    addMsn(text);
    texto.value = "";
  
}



function addMsn(text) {

    var newText = document.createTextNode('');
    var newLi = document.createElement('li');
    var newUl = document.createElement('ul');
    var newDiv = document.createElement('div');
    newDiv.innerText = text;
    var cont = document.getElementById("cont");



    newLi.appendChild(newText);  // dando nodo de texto a li
    newUl.appendChild(newLi); // dando li a ul
    newDiv.appendChild(newUl); // dando ul al div
}


//función crecer area

function grow() {
    listName.style.cssText = "height: auto";
    listName.style.cssText = "height: " + listName.scrollHeight + "px";
}

function resize() {
    listName.style.cssText = "height: auto";
}
