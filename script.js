const difficulty={
    easy:["00","02","03","05","06","07","12","14","16","18","21","22","25","35","37",
    "40","41","44","45","48","55","56","57","58","60","61","62","65","66","67","68","70","71","74","77","85","86","88"],
    medium:["04","05","07,08","13","16","17","18","24","27","28","30","35","37","38","41","43","44","46","48","50","60","61","65","67","68","70","74","82","83"],
    hard:[00,01,03,14,16,17,18,23,24,26,30,32,33,37,51,54,55,56,57,60,62,64,72,73,77,86,87,88]
}
const values={
    easy:[4,9,8,2,1,7,1,4,3,9,3,5,6,3,9,6,9,5,7,3,4,6,2,7,9,2,6,8,4,5,1,1,5,2,3,1,9,2],
    medium:[7,2,1,3,9,6,8,7,3,5,4,9,7,4,5,5,3,9,7,6,4,2,1,6,3,8,6,2,4,5],
    hard:[]
}
let easy=document.querySelector("#easy");
let medium=document.querySelector("#medium");
let hard=document.querySelector("#hard");
easy.addEventListener("click",()=>{
    for(var z=0;z<difficulty.easy.length;z++){
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                if((""+i+j)===difficulty.easy[z]){
                   
                    var ele=document.getElementById(`c${i}${j}`);
                    ele.disabled=true;
                    ele.style.background="red";
                    console.log(values.easy[z])
                    ele.value=values.easy[z];

                }
               
               
            }
        }
    }
    
})

medium.addEventListener("click",()=>{
    for(var z=0;z<difficulty.medium.length;z++){
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                if((""+i+j)===difficulty.medium[z]){
                   
                    var ele=document.getElementById(`c${i}${j}`);
                    ele.disabled=true;
                    ele.style.background="red";
                    console.log(values.medium[z])
                    ele.value=values.medium[z];

                }
               
               
            }
        }
    }
})

hard.addEventListener("click",()=>{
    console.log(difficulty.hard.length)
})
