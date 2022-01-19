function calc(opt){
    var a=document.getElementById("First").value;
    var b=document.getElementById("Second").value;
    var output;
    if(opt=="add"){
        output=`Sum is ${Number(a)+Number(b)}`;
    }else if(opt=="sub"){
        output=`Subtraction is ${Number(a)-Number(b)}`;
    }else if(opt=="mul"){
        output=`Multiplication is ${Number(a)*Number(b)}`;
    }else if(opt=="div"){
        output=`Division is ${Number(a)/Number(b)}`;
    }else{
        output=`Remainder is ${Number(a)%Number(b)}`;
    }
    document.getElementById("Output").innerText=output;
  
}
function changeMode(){
    var c=document.body;
    c.classList.toggle(`myDark`)

    var d=document.getElementById("Mode").value;
    if(d.value=="Dark Mode"){
      d.value="Light Mode";
    }else{
       d.value="Dark Mode"; 
    }
   
}
