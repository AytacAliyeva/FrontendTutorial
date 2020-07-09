function seePassword() {
    var x = document.getElementById('newPassword');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}

function showPassword() {
    var y = document.getElementById('confirmPassword');
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

$("i").click(function () {
    $(this).toggleClass("fas fa-eye fas fa-eye-slash");

});
//First Compare Password
/*function compareText() {
    var txt1, txt2;
    txt1 = document.getElementById('newPassword');
    txt2 = document.getElementById('confirmPassword');
    if (txt1.value == '') {
        alert("Please Enter Password")
    } else if (txt2.value == '') {
        alert("Please Enter Confirm Password")
    } else if (txt1.value == txt2.value) {
        alert("Great! Password same");
        return true;
    } else
        alert("Your password not same");
    return false;
}*/

//Second
function samePassword() {
    var txt1, txt2, i, k, message;
    message = document.getElementById('PasswordMatch');
    txt1 = document.getElementById('newPassword');
    txt2 = document.getElementById('confirmPassword');
    if (txt1.value != txt2.value) {
        message.innerHTML = "Password do not match";
        message.style.color = 'red';
    }
    else {
        message.innerHTML = "Great!!!";
        message.style.color = 'green';
    }
}
