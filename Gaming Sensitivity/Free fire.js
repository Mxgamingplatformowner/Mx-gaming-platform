const inputEL = document.querySelector(".input"); 

const bodyEL =document.querySelector("body")

console.log(inputEL.checked);

inputEL.checked=false;

updatebody()

function updatebody(){
    if(inputEL.checked){
        bodyEL.style.background
        ="black";
        bodyEL.style.color ="white";
    }else{
        bodyEL.style.background="white";
        bodyEL.style.color="black";
    }
}
inputEL.addEventListener("input",()=>{
updatebody()
});