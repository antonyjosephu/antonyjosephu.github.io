function validateForm(){
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;
const message=document.getElementById("message").value;
if(name===``|| email===`` || phone===`` || message===``){
window.alert("Fill out details to submit");
return false;
}
return true;
}



