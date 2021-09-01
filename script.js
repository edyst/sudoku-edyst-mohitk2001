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
let globalLevel = "easy";
let emptyCell = false;
let inputValue = null;
let easy = document.querySelector("#easy");
let medium = document.querySelector("#medium");
let hard = document.querySelector("#hard");
let defaultColor_back = "#EBEBE4";
let onFocus_color = "lightblue";
let danger_color = "red";
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
      if (!document.getElementById(`c${a}${b}`).disabled) {
        document.getElementById(`c${a}${b}`).removeAttribute("style");
        document.getElementById(`c${a}${b}`).classList.add("hoverEffect");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "easy";
};

const clearPreviousBoard = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      var removeThese = document.getElementById(`c${i}${j}`);
      removeThese.disabled = false;
      removeThese.value = "";
      removeThese.style.background = "#fff";
      if (removeThese.getAttribute("class")) {
        removeThese.classList.remove("hoverEffect");
      }
      if (
        removeThese.getAttribute("onfocus") &&
        removeThese.getAttribute("onblur")
      ) {
        removeThese.removeAttribute("onfocus");
        removeThese.removeAttribute("onblur");
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
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "easy";
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
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "medium";
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
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onfocus", "runFocus(this);");
        document
          .getElementById(`c${a}${b}`)
          .setAttribute("onblur", "runBlur(this);");
      }
    }
  }
  globalLevel = "hard";
});

//onfocusing on perticular cell

function runFocus(e) {
  e.style.background = "#BBDEFB";

  //for rowFocus
  let rowFocus = e.id.charAt(1);

  let rowFocusBack = parseInt(rowFocus);
  let rowFocusForward = parseInt(rowFocus);
  for (let i = rowFocusForward; i < 9; i++) {
    if (!document.getElementById(`c${i}${e.id.charAt(2)}`).disabled)
      document.getElementById(`c${i}${e.id.charAt(2)}`).style.background =
        "#E2E7ED";
  }
  for (let j = rowFocusBack; j >= 0; j--) {
    if (!document.getElementById(`c${j}${e.id.charAt(2)}`).disabled)
      document.getElementById(`c${j}${e.id.charAt(2)}`).style.background =
        "#E2E7ED";
  }
  //ends here

  //for column focus
  let columnFocus = e.id.charAt(2);

  let colFocusForward = parseInt(columnFocus);
  let columnFocusBack = parseInt(columnFocus);

  for (let m = colFocusForward; m < 9; m++) {
    if (!document.getElementById(`c${e.id.charAt(1)}${m}`).disabled)
      document.getElementById(`c${e.id.charAt(1)}${m}`).style.background =
        "#E2E7ED";
  }
  for (let n = columnFocusBack; n >= 0; n--) {
    if (!document.getElementById(`c${e.id.charAt(1)}${n}`).disabled) {
      document.getElementById(`c${e.id.charAt(1)}${n}`).style.background =
        "#E2E7ED";
    }
  }
  //ends here
  e.style.background = "#BBDEFB";

  //validation for row
  e.addEventListener("keypress", (event) => {
    //console.log(event.key)
    inputValue = event.key;
    console.log(e.id);
    //same value will be highlight on the board
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (document.querySelector(`#c${i}${j}`).value === inputValue) {
          document.querySelector(`#c${i}${j}`).style.background = "lightblue";
        }
      }
    }

    //checkValid row
    let row_Validate = e.id.charAt(1);

    let rowTrack_back = parseInt(row_Validate);
    let rowTrack_for = parseInt(row_Validate);
    console.log(row_Validate);
    for (let i = rowTrack_for; i < 9; i++) {
      if (
        document.getElementById(`c${i}${e.id.charAt(2)}`).value === inputValue
      ) {
        alert("Dublicate value not allowed You cant have same value in same column");
        break;
      }
    }
    for (let j = rowTrack_back; j >= 0; j--) {
      if (
        document.getElementById(`c${j}${e.id.charAt(2)}`).value === inputValue
      ) {
        alert("Dublicate value not allowed You cant have same value in same column");
        break;
      }
    }

    // ckeckValid for column
    let column_Validate = e.id.charAt(2);

    let columnTrack_for = parseInt(column_Validate);
    let columnTrack_back = parseInt(column_Validate);
  
    for (let m = columnTrack_for; m < 9; m++) {
     if(document.getElementById(`c${e.id.charAt(1)}${m}`).value=== inputValue)
     {
      alert("Dublicate value not allowed You cant have same value in same row");
        break;
     }
    }
    for (let n = columnTrack_back; n >= 0; n--) {
      if(document.getElementById(`c${e.id.charAt(1)}${n}`).value===inputValue)
      {
        alert("Dublicate value not allowed You cant have same value in same row");
        break;
      }
    }

  });
}

//onblur
function runBlur(e) {
  //for rowBlur
  let rowBlur = e.id.charAt(1);

  let rowBlurBack = parseInt(rowBlur);
  let rowBlurForward = parseInt(rowBlur);
  for (let i = rowBlurForward; i < 9; i++) {
    if (!document.getElementById(`c${i}${e.id.charAt(2)}`).disabled)
      document
        .getElementById(`c${i}${e.id.charAt(2)}`)
        .removeAttribute("style");
  }
  for (let j = rowBlurBack; j >= 0; j--) {
    if (!document.getElementById(`c${j}${e.id.charAt(2)}`).disabled)
      document
        .getElementById(`c${j}${e.id.charAt(2)}`)
        .removeAttribute("style");
  }
  //ends here
  //for ColBlur
  let columnBlur = e.id.charAt(2);

  let columnBlurForward = parseInt(columnBlur);
  let columnBlurBack = parseInt(columnBlur);
  for (let m = columnBlurForward; m < 9; m++) {
    if (!document.getElementById(`c${e.id.charAt(1)}${m}`).disabled)
      document
        .getElementById(`c${e.id.charAt(1)}${m}`)
        .removeAttribute("style");
  }
  for (let n = columnBlurBack; n >= 0; n--) {
    if (!document.getElementById(`c${e.id.charAt(1)}${n}`).disabled) {
      document
        .getElementById(`c${e.id.charAt(1)}${n}`)
        .removeAttribute("style");
    }
  }
  //alternative of highlight part it will set as the elements were
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (document.querySelector(`#c${i}${j}`).value === inputValue) {
        document.querySelector(`#c${i}${j}`).style.background =
          defaultColor_back;
      }
    }
  }

  e.removeAttribute("style");
}

const checkForEachCell = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cellValue = document.getElementById(`c${i}${j}`).value;
      if (cellValue === "") {
        emptyCell = true;
        break;
      }
    }
  }
  if (emptyCell) {
    alert("Each cell must be filled");
  }
};

const validata_Button = document.getElementById("validationButton");
validata_Button.addEventListener("click", () => {
  console.log(globalLevel);

  checkForEachCell();
});

//here is solved version of question on difficulty level

const solvedPuzz = {
  easy: [
    [9, 3, 1, 8, 6, 5, 2, 4, 7],
    [2, 6, 4, 9, 1, 7, 8, 3, 5],
    [5, 7, 8, 2, 3, 4, 9, 1, 6],
    [3, 2, 5, 7, 4, 6, 1, 9, 8],
    [6, 8, 9, 3, 2, 1, 7, 5, 4],
    [1, 4, 7, 5, 8, 9, 6, 2, 3],
    [4, 9, 6, 1, 7, 3, 5, 8, 2],
    [7, 1, 2, 4, 5, 8, 3, 6, 9],
    [8, 5, 3, 6, 9, 2, 4, 7, 1],
  ],
  medium: [
    [5, 3, 9, 1, 6, 8, 4, 7, 2],
    [1, 6, 8, 7, 4, 2, 3, 5, 9],
    [7, 2, 4, 9, 5, 3, 8, 1, 6],
    [6, 7, 3, 8, 1, 4, 9, 2, 5],
    [2, 9, 1, 5, 3, 7, 6, 4, 8],
    [8, 4, 5, 6, 2, 9, 7, 3, 1],
    [9, 5, 6, 3, 7, 1, 2, 8, 4],
    [3, 8, 2, 4, 9, 5, 1, 6, 7],
    [4, 1, 7, 2, 8, 6, 5, 9, 3],
  ],
  hard: [
    [3, 6, 8, 5, 9, 1, 4, 7, 2],
    [5, 1, 7, 4, 2, 3, 9, 6, 8],
    [9, 2, 4, 6, 7, 8, 3, 5, 1],
    [1, 8, 5, 7, 3, 9, 6, 2, 4],
    [2, 3, 6, 8, 4, 5, 1, 9, 7],
    [7, 4, 9, 1, 6, 2, 8, 3, 5],
    [6, 7, 2, 9, 8, 4, 5, 1, 3],
    [4, 5, 3, 2, 1, 6, 7, 8, 9],
    [8, 9, 1, 3, 5, 7, 2, 4, 6],
  ],
};
