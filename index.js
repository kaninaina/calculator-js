let navContainer=document.querySelector(".menu-content");
let toggleMenu=document.querySelector(".menu");
let menuList=document.querySelectorAll(".menu-container ul li");
let pageSpace=document.querySelector(".space-flex");

// navContainer.addEventListener("click",(e)=>{
//     let target=e.target;
//     if(target==navContainer){
//         console.log(target);
//         // navContainer.classList.remove("active");
//     }
//     else{
//         console.log("kani");
//     }
// })

// document.addEventListener("click",(e)=>{
//     let target=e.target;
//     if(target==navContainer){
//                 console.log(target);
//                 // navContainer.classList.remove("active");
//             }
//             else{
//                navContainer.classList.remove("active")
//             }
// })

toggleMenu.addEventListener("click",menuToggle);

// menu list 
menuList.forEach((el)=>{
    el.addEventListener("click",container);

})

function menuToggle(){
    navContainer.classList.toggle("active");
    toggleMenu.classList.toggle("active")
}


function container(e){
    navContainer.classList.remove("active");
    toggleMenu.classList.remove("active")
let parent=e.target.closest(".list-con");
let target=parent.querySelector(".name").innerHTML.toLowerCase().split(" ").join("");


pageOpen(target);
}

function pageOpen(target){
    let pageChildren=[...pageSpace.children];
    pageChildren.forEach((el)=>{
        el.style.display="none";
    });
    let active=pageChildren.find((el)=>{
        let a=el.getAttribute("name");
        return a==target;
    })
   active.style.display="block"
}


// calculator

let calculatorInput=document.querySelector("#calculatotinput");
let calculatorResult=document.querySelector("#calculatorresult");
let buttons=document.querySelectorAll(".value");
let operators=document.querySelectorAll(".operator");
let allClear=document.querySelector(".allclear");
let cancel=document.querySelector(".cancel");
let equal=document.querySelector(".equal");
buttons.forEach((el)=>{
    el.addEventListener("click",operand);
    el.addEventListener("mouseup",eva);
})

function operand(e){
    let value=e.target.innerHTML;
    calculatorInput.value+=value;
}

operators.forEach((el)=>{
    el.addEventListener("click",operator);
})

function operator(e){
    if(calculatorResult.innerHTML==""){
        if(calculatorInput.value==""){
            calculatorResult.innerHTML="ERROR"
            return ""
        }
let old=calculatorInput.value;
let value=e.target.value;
calculatorResult.innerHTML=old;
calculatorInput.value+=value;
    }
  else {
    let value=e.target.value;
    calculatorInput.value+=value
  }
}

function eva(){
    setTimeout(evaOne,100)
  
}

function evaOne(){
    if(calculatorResult.innerHTML!=""){
        let input=calculatorInput.value;
      let a=eval(input);
      calculatorResult.innerHTML=a;
    }
}

allClear.addEventListener("click",()=>{
    calculatorInput.value="";
    calculatorResult.innerHTML="";
    calculatorInput.focus();
})

cancel.addEventListener("click",()=>{
    let a=calculatorInput.value;
    let b=a.slice(0,a.length-1);
    calculatorInput.value=b;
    evaOne();
})

equal.addEventListener("click",()=>{
    let input=calculatorInput.value;
    let a=eval(input);
    calculatorResult.innerHTML="";
    calculatorInput.value=a;
    console.log(a);
})


// date calculation start here 


let dateTypeSelection=document.querySelector(".date-type");
let dateTypeList=document.querySelector(".date-type-selection");
let dateTypeResult=document.querySelector(".date-type-result");


dateTypeResult.addEventListener("click",dateTypeSelected);
dateTypeList.addEventListener("click",typeSelect);

function dateTypeSelected(){
    dateTypeList.style.display="block";
}
function typeSelect(e){
let target=e.target.innerHTML;
dateTypeList.style.display="none";
dateTypeResult.innerHTML=target;
difference(e.target);
}
function difference(y){
    let target=y;
    let nam=target.getAttribute("name");
    let parent=document.querySelector(".date-differnce");
    let children=[...parent.children];
    children.forEach((el)=>{
        el.style.display="none"
    })
let diffent=children.find((el)=>{
    let a=el.getAttribute("name");
    return a==nam;
});
diffent.style.display="block";

}



