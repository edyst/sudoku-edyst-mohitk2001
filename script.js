const difficulties={
    easy:[
        [0,3,0,0,6,5,2,4,0],//0
        [0,0,0,0,0,0,0,0,0],//1
        [0,0,8,2,3,0,0,0,0],//2
        [0,0,0,0,0,6,1,0,0],//3
        [0,8,9,0,0,0,0,5,0],//4
        [0,0,7,0,8,9,0,0,0],//5
        [4,9,0,1,0,0,0,0,2],//6
        [7,0,0,0,5,8,0,6,9],//7
        [0,0,0,0,0,0,4,0,0]//8
    ],
    medium:[
        [0,0,0,0,6,0,0,7,0],//0
        [0,0,8,7,4,0,0,5,0],//1
        [0,0,0,0,0,0,0,0,0],//2
        [0,7,0,8,0,0,0,0,0],//3
        [2,0,0,0,3,0,6,4,0],//4
        [0,4,0,0,0,9,0,3,1],//5
        [0,5,0,3,0,0,2,0,0],//6
        [0,0,0,0,9,0,0,0,0],//7
        [0,1,7,0,0,0,5,0,0]//8
    ] ,
    hard:[
        [0,6,0,9,1,0,0,0,0],//0
        [5,0,7,0,0,0,0,0,8],//1
        [0,2,0,0,0,0,0,5,0],//2
        [0,0,0,7,0,9,6,0,4],//3
        [0,0,6,8,0,0,0,0,7],//4
        [0,4,0,0,0,0,0,3,0],//5
        [0,0,0,0,0,4,5,1,0],//6
        [4,0,0,0,0,6,7,0,9],//7
        [0,0,0,0,0,7,0,0,0]//8
    ]    
}
const values={
    easy:[3,6,5,2,4,8,2,3,6,1,8,9,5,7,8,9,4,9,1,2,7,5,8,6,9,4],
    medium:[6,7,8,7,4,5,7,8,2,3,6,4,4,9,3,1,5,3,2,9,1,7,5],
    hard:[6,9,1,5,7,8,2,5,7,9,6,4,6,8,7,4,3,4,5,1,4,6,7,9,7]
}
let easy=document.querySelector("#easy");
let medium=document.querySelector("#medium");
let hard=document.querySelector("#hard");

 window.onload=()=>{
    easy.focus();
    for(let a=0;a<9;a++){
    for(let b=0;b<9;b++){
        if(difficulties.easy[a][b]!==0){
         var ele=document.getElementById(`c${a}${b}`);
         ele.disabled=true;
         ele.style.background="#EBEBE4";
         ele.value=difficulties.easy[a][b];
        }
    } 
 }   
 }
   

const clearPreviousBoard=()=>{
  for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
          var clearEle=document.getElementById(`c${i}${j}`).value;
          
          if(clearEle!=="")
          {    
              var removeThese=document.getElementById(`c${i}${j}`);
              
              removeThese.disabled=false;
              removeThese.value="";
              removeThese.style.background="#fff";
          }
      }
  }
    
}
easy.addEventListener("click",()=>{

    clearPreviousBoard();
    for(let a=0;a<9;a++){
       for(let b=0;b<9;b++){
           if(difficulties.easy[a][b]!==0){
            var ele=document.getElementById(`c${a}${b}`);
            ele.disabled=true;
            ele.style.background="#EBEBE4";
            ele.value=difficulties.easy[a][b];
           }
       } 
    }
})

medium.addEventListener("click",()=>{

    clearPreviousBoard();

    for(let a=0;a<9;a++){
        for(let b=0;b<9;b++){
            if(difficulties.medium[a][b]!==0){
             var ele=document.getElementById(`c${a}${b}`);
             ele.disabled=true;
             ele.style.background="#EBEBE4";
             ele.value=difficulties.medium[a][b];
            }
        } 
     }
})

hard.addEventListener("click",()=>{
    clearPreviousBoard();

    for(let a=0;a<9;a++){
        for(let b=0;b<9;b++){
            if(difficulties.hard[a][b]!==0){
             var ele=document.getElementById(`c${a}${b}`);
             ele.disabled=true;
             ele.style.background="#EBEBE4";
             ele.value=difficulties.hard[a][b];
            }
        } 
     }
})
