var username = document.forms['book']['username'];
var email = document.forms['book']['email'];
var contact = document.forms['book']['number'];
var guests = document.forms['book']['guests'];

var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var contact_error = document.getElementById('contact_error');
var guests_error = document.getElementById('guests_error');

username.addEventListener('textInput', username_Verify);
email.addEventListener('textInput', email_Verify);
contact.addEventListener('textInput', contact_Verify);
guests.addEventListener('textInput', guests_Verify);

function validated() {

     if (username.value.length < 1) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }

    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (contact.value.length < 10) {
        contact.style.border = "1px solid red";
        contact_error.style.display = "block";
        contact.focus();
        return false;
    }


    if (guests.value.length < 1) {
        guests.style.border = "1px solid red";
        guests_error.style.display = "block";
        guests.focus();
        return false;
    }

}

function username_Verify() {
    if (username.value.length >= 1) {
        username.style.border = "1px solid black";
        username_error.style.display = "none";
        return true;
    }
}

function email_Verify() {
    if (email.value.length >= 5) {
        email.style.border = "1px solid black";
        email_error.style.display = "none";
        return true;
    }
}

function contact_Verify() {
    if (contact.value.length < 11 ) {
        contact.style.border = "1px solid black";
        contact_error.style.display = "none";
        return true;
    }
}

function guests_Verify() {
    if (guests.value.length >= 1) {
        guests.style.border = "1px solid black";
        guests_error.style.display = "none";
        return true;
    }
}

function auth() {
    alert("Form submission successful")
}



function auth() {
    document.getElementById("username_error").value = "";
    document.getElementById("email_error").value = "";
    document.getElementById("contact_error").value = "";
    document.getElementById("guests_error").value = "";
}