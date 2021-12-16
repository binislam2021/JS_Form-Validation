//1.0 Get Element fron HTML
var userName = document.getElementById("userName");
var userErr = document.getElementById("userErr");

var userEmail = document.getElementById("userEmail");
var emailErr = document.getElementById("emailErr");

var userPass = document.getElementById("userPass");
var passErr = document.getElementById("passErr");

var rePass = document.getElementById("rePass");
var rePassErr = document.getElementById("rePassErr");


//2.0 Creat a Function for Submit Button
function subm(){

    // userName
    if  (userName.value == ""){
        userName.style.borderColor = "red";
        userName.focus();
        userErr.innerHTML = "Please fill out this field first";
        return false;
    }


    // userEmail
    if  (userEmail.value == ""){
        userEmail.style.borderColor = "red";
        userEmail.focus();
        emailErr.innerHTML = "Please fill out this field first";
        return false;
    }
    

    // userPass
    if  (userPass.value == ""){
        userPass.style.borderColor = "red";
        userPass.focus();
        passErr.innerHTML = "Please Creat your Password first";
        return false;
    }

    // Password Length
    if (userPass.value.length <=5){
        userPass.style.borderColor = "red";
        userPass.focus();
        passErr.innerHTML = "Password must be atleast 6 characters";
        return false;
    }
    
    
    // rePass
    if  (rePass.value == ""){
        rePass.style.borderColor = "red";
        rePass.focus();
        rePassErr.innerHTML = "Please Confirm Your Password";
        return false;
    }

    // rePass Matching to
    if (rePass.value != userPass.value){
        rePass.style.borderColor = "red";
        rePass.focus();
        rePassErr.innerHTML = "Password and Confirm Password didn't match";
        return false;
    }
};



// 3.0 Creat a function to Remove Error after filling input tag

function errRmv(){

    // userName
    if  (userName.value != ""){
        userName.style.borderColor = "#ddd";
        userErr.innerHTML = "";
    };


    // userEmail
    if  (userEmail.value != ""){
        userEmail.style.borderColor = "#ddd";
        emailErr.innerHTML = "";
    };


    // userPass
    if  (userPass != ""){
        userPass.style.borderColor = "#ddd";
        passErr.innerHTML = "";
    };

    // rePass
    if  (rePass != ""){
        rePass.style.borderColor = "#ddd";
        rePassErr.innerHTML = "";
    };
};


// Creat an Event in JS
userName.addEventListener("blur", errRmv);

userEmail.addEventListener("blur", errRmv);

userPass.addEventListener("blur", errRmv);

rePass.addEventListener("blur", errRmv);
 


// Modal JS
var btn = document.getElementById("btn");
var modal = document.getElementById("modal");
var close = document.getElementById("close");

btn.addEventListener("click", function(){
    modal.style.display = "flex";
});

close.addEventListener("click", function(){
    modal.style.display = "none";
});