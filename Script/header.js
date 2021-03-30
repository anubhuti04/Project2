var sign_Up_Model = document.getElementsByClassName("signUp")[0];


var sign_Up_Btn = document.getElementsByClassName("topinButtons")[0];

var sign_Up_Close = document.getElementsByClassName("signUpClose")[0];

sign_Up_Btn.onclick = function() {
    sign_Up_Model.style.display = "flex";

}

sign_Up_Close.onclick = function() {
    sign_Up_Model.style.display = "none";
}



var signInModel1 = document.getElementsByClassName("signIn")[0];

var sign_In_Btn = document.getElementsByClassName("topinButtons")[1];

var sign_In_Close = document.getElementsByClassName("signInClose")[0];

sign_In_Btn.onclick = function() {
    signInModel1.style.display = "flex";

}

sign_In_Close.onclick = function() {
    signInModel1.style.display = "none";
}


var ggwp = document.getElementsByClassName("ggwp")[0];

ggwp.onclick = function() {
    signInModel.style.display = "none";
    signUpModel.style.display = "flex";
}





window.onclick = function(event) {
    if (event.target === signUpModel) {
        signUpModel.style.display = "none";
    }
    if (event.target === signInModel) {
        signin_modal.style.display = "none";
    }
}