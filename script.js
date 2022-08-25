
// required variables

const confirmButton = document.getElementById("btn1");
const continueButton = document.getElementById("btn2");

const completeForm = document.getElementById("myform");
const secondState = document.getElementById("second-state");

const nameInput = document.getElementById("fname");
const nameError = document.getElementById("name-error");

const cvcInput = document.getElementById("cvc");
const cvcError = document.getElementById("cvc-error");

const mmInput = document.getElementById("expmm");
const yyInput = document.getElementById("expyy");
const expError = document.getElementById("exp-error");

const cardInput = document.getElementById("cnumber");
const cardError = document.getElementById("number-error");

const credNum = document.getElementById("cred-number");
const cardName = document.getElementById("card-name");
const cvcNum = document.getElementById("cvc-num");
const yyNum = document.getElementById("yy-num");
const mmNum = document.getElementById("mm-num");




let errorName = 0, errorNum = 0, errorMM = 0, errorYY = 0, errorCVC = 0;


//returns to form page after completion

function refreshPage() {


    document.location.reload();

}


// submit completed form

function submitForm() {

    completeForm.style.display = "none";
    secondState.style.display = "flex";

}

// regex for major card numbers

function validateCred(input) {

    let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    return input.value.match(cardno);


}


confirmButton.addEventListener("click", validateForm);
continueButton.addEventListener("click", refreshPage);


// form validation

function validateForm() {



    // Checks if name is not blank 


    if (nameInput.value === '') {

        nameError.innerHTML = "Can't be blank";
        nameError.style.display = "block";
        nameInput.style.borderColor = "red";
        errorName++;

    } else {

        nameError.style.display = "none";
        errorName = 0;
    }

    // Checks if cvc is a number and correct format



    if (cvcInput.value === '') {

        cvcError.innerHTML = "Can't be blank";
        cvcError.style.display = "block";
        cvcInput.style.borderColor = "red";
        errorCVC++;


    } else if (cvcInput.value.length < 3 || isNaN(cvcInput.value)) {

        cvcError.innerHTML = "Invalid CVC";
        cvcError.style.display = "block";
        cvcInput.style.borderColor = "red";
        errorCVC++;


    } else {

        cvcError.style.display = "none";
        errorCVC = 0;
    }

    // Checks if expiry date is a number and correct format



    if (mmInput.value === '' || yyInput.value === '') {

        expError.innerHTML = "Can't be blank";
        expError.style.display = "block";
        mmInput.style.borderColor = "red";
        yyInput.style.borderColor = "red";
        errorMM++;
        errorYY++;

    } else if (mmInput.value.length < 2 || yyInput.value.length < 2 || mmInput.value === 0 || mmInput < 01 || mmInput.value > 12 || yyInput.value < 22 || isNaN(mmInput.value) || isNaN(yyInput.value)) {

        expError.innerHTML = "Invalid Expiry Date";
        expError.style.display = "block";
        yyInput.style.borderColor = "red";
        mmInput.style.borderColor = "red";
        errorMM++;
        errorYY++;

    }

    else {

        expError.style.display = "none";
        errorMM = 0;
        errorYY = 0;

    }


    // Checks for valid card entry



    if (!validateCred(cardInput)) {

        cardError.innerHTML = "Please enter a valid card number";
        cardError.style.display = "block";
        cardInput.style.borderColor = "red";
        errorNum++;

    }



    else {

        cardError.style.display = "none";
        errorNum = 0;

    }

    // checks for errors, if none continues to next page

    let formErrors = errorName + errorNum + errorMM + errorYY + errorCVC;

    if (formErrors != 0) {

        submitForm();
    }


}


// card details update in realtime 

nameInput.addEventListener("keyup", nameUpdate);
cardInput.addEventListener("keyup", numUpdate);
cvcInput.addEventListener("keyup", cvcUpdate);
yyInput.addEventListener("keyup", yyUpdate);
mmInput.addEventListener("keyup", mmUpdate);

function numUpdate() {



    let space = cardInput.value;
    let numChange = space.match(/.{1,4}/g);
    credNum.innerHTML = numChange.join(' ');



}

function nameUpdate() {


    cardName.innerHTML = nameInput.value;


}

function cvcUpdate() {

    cvcNum.innerHTML = cvcInput.value;

}

function yyUpdate() {

    yyNum.innerHTML = yyInput.value;

}

function mmUpdate() {

    mmNum.innerHTML = mmInput.value;

}


