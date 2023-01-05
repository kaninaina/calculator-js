let navContainer=document.querySelector(".menu-content");
let toggleMenu=document.querySelector(".menu");
let menuList=document.querySelectorAll(".menu-container ul li");
let pageSpace=document.querySelector(".space-flex");
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
    });
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

let dateInput=document.querySelectorAll(".dateValue");
dateInput.forEach((el)=>{
    el.addEventListener("change",dateDifferenceCalculate);

})
function dateDifferenceCalculate(e){
let from=dateInput[0].value;
let to=dateInput[1].value;
let fromDate=new Date(from);
let toDate=new Date(to);
let weekSpan=document.querySelector("#week");
let weekDaySpan=document.querySelector("#weekdays");
let daysSpan=document.querySelector("#days")
if(fromDate=="Invalid Date" || toDate=="Invalid Date"){
    return ""
}
let dateOne;
let dateTwo;
if(from>to){
dateOne=fromDate;
dateTwo=toDate;
}
else{
    dateOne=toDate;
    dateTwo=fromDate;
}
let resultInMilliSecond=dateOne-dateTwo;
let sec=resultInMilliSecond/1000;
let min=sec/60;
let hr=min/60;
let day=Math.floor(hr/24);
let week=Math.ceil(day/7);
let weekCount=day%7;
let dayCount=Math.floor((day/7));
weekSpan.innerHTML=dayCount;
weekDaySpan.innerHTML=weekCount;weekCount
daysSpan.innerHTML=day;
}

// Difference Date




// currency calculation
let currencySelections=document.querySelectorAll(".currency-one-slection select");
currencySelections.forEach((el)=>{
    el.addEventListener("change",(e)=>{
        e.target.parentElement.parentElement.querySelector("p").innerHTML=e.target.selectedOptions[0].innerHTML;
        currencySelect(e);
    })
})
let currencyInput=document.querySelectorAll(".currencyInput");
currencyInput.forEach((el)=>{
    el.addEventListener("keyup",(e)=>{
        currencySelect(e);
    })
})

function currencySelect(e){
    let currencyFromTo=[...document.querySelectorAll(".currency-one")];
    currencyFromTo.forEach((el)=>{
        el.classList.remove("active");
    })
    e.target.closest(".currency-one").classList.add("active");
    let currencyFrom=e.target.closest(".currency-one");

    let currencyTo=currencyFromTo.find((el)=>{
        let b=el.classList.contains("active");
        return b==false;
    });


calculateCurrency(currencyFrom,currencyTo);
}

function calculateCurrency(fromElement,toElement){
   let valu=fromElement.querySelector("input").value;
   let from=fromElement.querySelector("select").selectedOptions[0].innerHTML;
   let to=toElement.querySelector("select").selectedOptions[0].innerHTML;
   let toInput=toElement.querySelector("input");
var myHeaders = new Headers();
myHeaders.append("apikey", "PCXL6sttRhHmFONcEZ10qCbuft88CsQ1");
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
if(valu==0){
    toInput.value=0;
    return ""
}
fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${valu}`, requestOptions)
  .then(response => response.json())
  .then(resul => {
    toInput.value=resul.result;
  }

  )
  .catch(error => console.log('error', error));
  let cu="https://v6.exchangerate-api.com/v6/e5b5a72ec2f83e8e4288ce1d/latest/USD";
  let d=new XMLHttpRequest();
  d.open("GET",cu)
}
let volumeSelect=document.querySelectorAll(".volume-one-select");
volumeSelect.forEach((el)=>{
    el.addEventListener("change",volumeSelection);
})
function volumeSelection(e){
    let volumeParent=[...document.querySelectorAll(".volume-input-one")];
    volumeParent.forEach((el)=>{
        el.classList.remove("active");
    });
    e.target.closest(".volume-input-one").classList.add("active");
    let fromElement=e.target.closest(".volume-input-one");
    let toElement=volumeParent.find((el)=>{
        let a=el.classList.contains("active");
        return a==false;
    });
    calculateVolume(fromElement,toElement);
}
let volumeInput=[...document.querySelectorAll(".volumeInput")];
volumeInput.forEach((el)=>{
    el.addEventListener("keyup",(e)=>{
        volumeSelection(e);
    })
})
function calculateVolume(fromElement,toElement){
let volumeData={
    millimeter:14.786,
    cubicCentimeter:14.786,
    litre:0.0147868,
    cubicMeter:0.000014787,
    teaSpoon:3,
    tableSpoon:1,
    fluidOunce:0.500007955,
    quarts:0.015625,
    gallons:0.00325263,
    cubicInches:0.902344,
    cubicFeet:0.00052219,
    cubicYard:0.0000193404,
}
let fromType=fromElement.querySelector("select").selectedOptions[0].getAttribute("name");
let toType=toElement.querySelector("select").selectedOptions[0].getAttribute("name");
let fromValue=Number(fromElement.querySelector("input").value);
let a=fromValue/volumeData[fromType];
let b=a*volumeData[toType];
toElement.querySelector("input").value=b;
};
class Energy{
    value={
        fromValue:"",
        toValue:"",
        fromOption:"",
        toOption:"",
        result:"",
        toElement:"",
        selection:"",
    }
    data={
        speed:{
            centiMeterPerSecond:30.48,
            meterPerSecond:0.3048,
            kilometerPerSecond:0.0003048,
            feetPerSecond:1,
            milesPerHour:0.681818,
            knots:0.592484,
            mach:0.00088863,
        },
        area:{
            squareMillimeter:1,
            squarecentimeter:0.01,
            squaremeter:1e-6,
            hectares:1e-10,
            squareKilometer:1e-12,
            squareInches:0.00155,
            squareFeet:1.076388889e-5,
            squareYard:1.19598765444444959e-6,
            acres:2.471048872819111034e-10,
            squareMiles:3.861013863779861294e-13
        },
        volume:{
            millimeter:14.786,
            cubicCentimeter:14.786,
            litre:0.0147868,
            cubicMeter:0.000014787,
            teaSpoon:3,
            tableSpoon:1,
            fluidOunce:0.500007955,
            quarts:0.015625,
            gallons:0.00325263,
            cubicInches:0.902344,
            cubicFeet:0.00052219,
            cubicYard:0.0000193404,
        },
        length:{
            nanoMeter:1,
            Millimeter:1e-6,
            Centimeter:1e-7,
            meter:1e-9,
            kilometer:1e-12,
            inches:3.937e-8,
            feet:3.280833333e-9,
            yards:1.0936111110000002e-9,
            miles:6.213699494318182789e-13,
            nauticalMiles:5.399557234872571136e-13,},
            weight:{
                carat:0.005,
                milliGram:1,
                centiGram:0.1,
                Decigram:0.01,
                hectoGram:1e-5,
                kiloGram:1e-6,
                metricTon:1e-9,
                ounce:3.5274e-5,
                pound:2.2046e-6,
                stone:1.574714285869e-7,
                shortTon:1.10231e-9,
            },
            energy:{
            electronVolt:1,
            joules:1.60218e-19,
            kilojoules:1.60218e-22,
            foodCalories:3.8293e-20,
            footPounds:1.181707324378e-19,
            bts:1.518573633886495814e-22,}
    }
    getInputs(event){
        let parent=event.target.closest("#length");
        let type=parent.getAttribute("name");
        this.value.selection=type;
        let children=[...parent.children];
        children.forEach((el)=>{
            el.classList.remove("active");
        })
        let from=event.target.closest(".length-input-one");
        this.value.fromValue=from.querySelector("input").value;
        from.classList.add("active");
        let to=children.filter((el)=>{
            let a=el.classList.contains("active");
            return a==false;
        });
        let toValue=to[1];
        this.value.toElement=toValue;
        this.value.toValue=toValue.querySelector("input").value;
        let fromOption=from.querySelector("select").selectedOptions[0].getAttribute("name");
        this.value.fromOption=fromOption;
        let toOption=toValue.querySelector("select").selectedOptions[0].getAttribute("name");
        this.value.toOption=toOption;
    }
    calculateValue(){
        let a=this.value.fromValue/this.data[this.value.selection][this.value.fromOption];
        let b=a*this.data[this.value.selection][this.value.toOption];
        this.value.toElement.querySelector("input").value=b;

    }
    typing(event){
     let parent=event.target.closest("#length");
     let type=parent.getAttribute("name");
     this.value.selection=type;
     let children=[...parent.children];
     children.forEach((el)=>{
   el.classList.remove("active");
     });
     let inputs=[...parent.querySelectorAll("input")];
     let fromElement=inputs.find((el)=>{
        let a=el.focus;
        return a==true
     })
     fromElement.value+=event.target.innerHTML;
     this.value.fromValue=fromElement.value;
     let from=fromElement.closest(".length-input-one");
     from.classList.add("active");
     let to=children.filter((el)=>{
        let a=el.classList.contains("active");
        return a==false;
    });
    let toValue=to[1];
    this.value.toValue=toValue.querySelector("input").value;
    let toOption=toValue.querySelector("select").selectedOptions[0].getAttribute("name");
    this.value.toOption=toOption;
    }

}
let enery=new Energy();
let LengthInput=document.querySelectorAll(".length-one-select");
LengthInput.forEach((el)=>{
    el.addEventListener("change",(e)=>{
        enery.getInputs(e);
        enery.calculateValue();
    });
})

let lengthInput=document.querySelectorAll(".length-input");
lengthInput.forEach((el)=>{
    el.addEventListener("keyup",(e)=>{
        enery.getInputs(e);
        enery.calculateValue();
    });
});

// let key=document.querySelector(".volume-buttons");
// console.log(key);
// key.addEventListener("click",(e)=>{
//    enery.typing(e);
//    enery.calculateValue();
//    console.log("kani");
// })
