function clearvalue(){
  document.getElementById("myinput").value=""
}

function setValue(v){
let input=document.getElementById("myinput");
input.value+=v;
}


function calculate(){
let  input=document.getElementById("myinput");
 try{
   input.value=eval(input.value);
 }
 catch{
   input.value="error";
 }
}

function oneremove(){
  
let  input=document.getElementById("myinput");
input.value=input.value.slice(0, -1);
}
