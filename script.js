let string = "admin";
let stringp = "admin";

function form(){
var textv = document.getElementById("text").value;
var text = document.getElementById("text");
var passv = document.getElementById("pass").value;
var pass = document.getElementById("pass");
    if(textv == string && passv == stringp){
        alert("Login successfully!");
        pass.value = '';
        text.value = '';
        return false;
    }
    else if(text ==""){
        alert("Type username.");
        return false;
    }
    else if(pass ==""){
        alert("Type password.");
        return false;
    }
    else{
        alert("Username or Password is wrong!");
        return false;
    }
}
function pass_ch(){
    var cp = document.getElementById("cp");
    var contain = document.getElementById("contain");
    var contain2 = document.getElementById("contain2");

    cp.style.visibility = "hidden";
    contain.classList.add("hide");
    contain2.classList.remove("hide2");
}
function vclose(){
    var cp = document.getElementById("cp");
    var contain = document.getElementById("contain");
    var contain2 = document.getElementById("contain2");
    
    contain2.classList.add("hide2");
    contain.classList.remove("hide");
    cp.style.visibility = "visible";
}
function formb(){
    var textv = document.getElementById("text").value;
    var text = document.getElementById("text");
    var passv = document.getElementById("pass").value;
    var pass = document.getElementById("pass");
    var ou = document.getElementById('ou');
    var ouv = document.getElementById('ou').value;
    var op = document.getElementById("op");
    var opv = document.getElementById("op").value;
    var nu = document.getElementById('nu');
    var np = document.getElementById("np");

   
   if(ou.value == ''){
    alert("Type old username.")
   }
   else if(op.value == ''){
    alert("Type old password.")
   }
   else if(nu.value == ''){
    alert("Type new username.")
   }
   else if(np.value == ''){
    alert("Type new password.")
   }
   else if(ouv == string && opv == stringp){
    string = nu.value;
    stringp = np.value;
    alert("Username and Password changed successfully!")
    nu.value = '';
    np.value = '';
    ou.value = '';
    op.value = '';
    contain2.classList.add("hide2");
    contain.classList.remove("hide");
    cp.style.visibility = "visible";
   }
   else{
    alert("Old Username or Password is wrong!")
   }
}