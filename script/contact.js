function validateFName() {
    var phoneVal = validatePhonenumber(); //this var is for validate phone number
    var emailVal = validateEmail(); // this var is for validate email address
    var firstName = document.forms["contactForm"]["firstName"].value;

    // this part is to show error msg for first name, last name and msg
    var lnameErr = document.getElementById("lastNameError");
    var fnameErr = document.getElementById("firstNameError");
    var msgErr = document.getElementById("msgError");

    var fnameVal, lnameVal, msgVal;

    if (firstName === "") {
        fnameErr.style.display = "block";
        fnameVal = false;

    } else {
        fnameErr.style.display = "none";
        fnameVal = true;

    }

    var lastName = document.forms["contactForm"]["lastName"].value;
    if (lastName === "") {
        lnameErr.style.display = "block";
        lnameVal = false;

    } else {
        lnameVal = true;
        lnameErr.style.display = "none";

    }

    var msg = document.forms["contactForm"]["msg"].value;
    if (msg === "") {
        msgErr.style.display = "block";
        msgVal = false;

    } else {
        msgVal = true;
        msgErr.style.display = "none";

    }

    if (lnameVal && fnameVal && msgVal && phoneVal && emailVal) {
      submsg.style.display = "block";
      document.getElementById("contactForm").reset();
      event.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

        //alert("Your message is sent!");

    } else {
        //console.log("Message not sent");
        return false;

    }
}

// this function part is for validate phone number
function validatePhonenumber() {

    var inputtxt = document.forms["contactForm"]["phone"];
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phonenumberErr = document.getElementById("phoneError");

    if (inputtxt.value.match(phoneno)) {
        phonenumberErr.style.display = "none";
        return true;
    } else {
        phonenumberErr.style.display = "block";
        return false;
    }

}
// this function part is for validate email adr.
function validateEmail() {
    var inputText = document.forms["contactForm"]["email"];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailError = document.getElementById("emailError");
    if (inputText.value.match(mailformat)) {
        emailError.style.display = "none";
        return true;
    } else {

        emailError.style.display = "block";
        return false;
    }
}
