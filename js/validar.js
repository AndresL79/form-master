// JavaScript Document

function validando(){

var username=document.getElementById("inputname");
var email=document.getElementById("inputmail");
var phone=document.getElementById("inputphone");
var message=document.getElementById("inputmessage");
var condi=document.getElementById("check"); 



if(username.value==""){
sweetAlert("Oops...", "Name is required!", "error");
username.focus()
return false;
}//if

if (isNaN(username.value)==false){
sweetAlert("Oops...", "The name cannot contain only numbers!", "error");
return false;
}//if

if(email.value==""){
sweetAlert("Oops...", "Email is required!", "error");
email.focus()
return false;

}//if

function valemail(valor){
    re=/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/
    if(!re.exec(valor))    {
        return false;
    }else{
        return true;
    }
    }
    
    if(!valemail(email.value)){
    			   sweetAlert("Oops...", "Email invalid!", "error");
    			   email.focus();
    			   return false
    			}//if

if(message.value=="") {
sweetAlert("Oops...", "Message is required!", "error");
message.focus()
return false;

}//if

if (isNaN(message.value)==false){
sweetAlert("Oops...", "The message cannot contain only numbers!", "error");
return false;
}//if

if(condi.checked==false){
sweetAlert("Oops...", "You must accept the terms of use!", "error");
return false;
}//if



formu.submit();

}//funcion  

