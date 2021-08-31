const difficulties = {
  easy: [
    [0, 3, 0, 0, 6, 5, 2, 4, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 8, 2, 3, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 6, 1, 0, 0], //3
    [0, 8, 9, 0, 0, 0, 0, 5, 0], //4
    [0, 0, 7, 0, 8, 9, 0, 0, 0], //5
    [4, 9, 0, 1, 0, 0, 0, 0, 2], //6
    [7, 0, 0, 0, 5, 8, 0, 6, 9], //7
    [0, 0, 0, 0, 0, 0, 4, 0, 0], //8
  ],
  medium: [
    [0, 0, 0, 0, 6, 0, 0, 7, 0], //0
    [0, 0, 8, 7, 4, 0, 0, 5, 0], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 7, 0, 8, 0, 0, 0, 0, 0], //3
    [2, 0, 0, 0, 3, 0, 6, 4, 0], //4
    [0, 4, 0, 0, 0, 9, 0, 3, 1], //5
    [0, 5, 0, 3, 0, 0, 2, 0, 0], //6
    [0, 0, 0, 0, 9, 0, 0, 0, 0], //7
    [0, 1, 7, 0, 0, 0, 5, 0, 0], //8
  ],
  hard: [
    [0, 6, 0, 9, 1, 0, 0, 0, 0], //0
    [5, 0, 7, 0, 0, 0, 0, 0, 8], //1
    [0, 2, 0, 0, 0, 0, 0, 5, 0], //2
    [0, 0, 0, 7, 0, 9, 6, 0, 4], //3
    [0, 0, 6, 8, 0, 0, 0, 0, 7], //4
    [0, 4, 0, 0, 0, 0, 0, 3, 0], //5
    [0, 0, 0, 0, 0, 4, 5, 1, 0], //6
    [4, 0, 0, 0, 0, 6, 7, 0, 9], //7
    [0, 0, 0, 0, 0, 7, 0, 0, 0], //8
  ],
};

let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");

window.onload = () => {
  easy.focus();
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.easy[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.easy[a][b];
      }
      if(!document.getElementById(`c${a}${b}`).disabled){
        document.getElementById(`c${a}${b}`).removeAttribute("style") 
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect")
        document.getElementById(`c${a}${b}`).setAttribute("onfocus","runFocus(this);")
        document.getElementById(`c${a}${b}`).setAttribute("onblur","runBlur(this);")
      }
    }
  }
};

const clearPreviousBoard = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      var removeThese = document.getElementById(`c${i}${j}`);
      removeThese.disabled = false;
      removeThese.value = "";
      removeThese.style.background = "#fff";
    if(removeThese.getAttribute("class")){
      removeThese.classList.remove("hoverEffect");
    }
    if(removeThese.getAttribute("onfocus") && removeThese.getAttribute("onblur")){
        removeThese.removeAttribute("onfocus")
        removeThese.removeAttribute("onblur")
    }
    }
  }
};
easy.addEventListener("click", () => {
  easy.focus();
  clearPreviousBoard();
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.easy[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.easy[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document.getElementById(`c${a}${b}`).setAttribute("onfocus","runFocus(this);")
        document.getElementById(`c${a}${b}`).setAttribute("onblur","runBlur(this);")
      }
    }
  }
});

medium.addEventListener("click", () => {
  medium.focus();

  clearPreviousBoard();

  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.medium[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.medium[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document.getElementById(`c${a}${b}`).setAttribute("onfocus","runFocus(this);")
        document.getElementById(`c${a}${b}`).setAttribute("onblur","runBlur(this);")
      }
    }
  }
});

hard.addEventListener("click", () => {
  clearPreviousBoard();
  hard.focus();

  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (difficulties.hard[a][b] !== 0) {
        var ele = document.getElementById(`c${a}${b}`);
        ele.disabled = true;
        ele.style.background = "#EBEBE4";
        ele.value = difficulties.hard[a][b];
      }
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document.getElementById(`c${a}${b}`).setAttribute("onfocus","runFocus(this);")
        document.getElementById(`c${a}${b}`).setAttribute("onblur","runBlur(this);")
      }
    }
  }
});



//onfocusing on perticular cell

function runFocus(e){
    console.log(e)
    e.style.background="#BBDEFB"
   //looping for row
    
}

//onblur 
function runBlur(e){
   
    e.removeAttribute("style");
}

