const color = document.querySelector(".color");
const list = document.querySelector(".ul");
const describtion = document.querySelector(".description");
const newGame = document.querySelector(".newGame");

let difficulty = 2;
let elements;
var randomColor;
let rndInt;
var index;

function mazat() {
    [...elements].forEach((element) => {
        element.removeEventListener("click", neco);
    });
}

const neco = (e) => 
{
    if(e.target.id === randomColor){
        mazat();
        describtion.style.color = "#F07BFF";
        describtion.textContent = "CORRECT!"
        color.style.color = randomColor;
        newGame.textContent = "NEW GAME";
    }else {
        e.target.parentNode.removeChild(e.target);
        describtion.textContent = "TRY AGAIN! THAT COLOR WAS " +e.target.id;
        describtion.style.color = e.target.id;
    }
}

function start() {
    elements = document.querySelectorAll('li');
    randomColor = getRandomColor();

    color.textContent = randomColor;
    color.style.color = "#F07BFF";

    rndInt = Math.floor(Math.random() * difficulty) + 1;
    index = 1;

    describtion.textContent = "GUESS THE COLOR";
    newGame.textContent = "";

    [...elements].forEach((element) => {
        var color = getRandomColor();
        if(index == rndInt){
            element.style.backgroundColor = randomColor;
            element.setAttribute("id", randomColor);
        }else{
            element.style.backgroundColor = color;
            element.setAttribute("id", color);
        }
        element.addEventListener("click", neco);
        index++;
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

newGame.addEventListener("click", fillUl);
fillUl();

function onclick_event(id) {
    difficulty = id;
    fillUl();
}

function fillUl() {
    list.innerHTML = '';
    for(let i = 0; i < difficulty; i++){
        let li = document.createElement("li");
        list.appendChild(li);
    }
    start();
}

