
// required variables

const confirmButton = document.getElementById("btn1");
const continueButton = document.getElementById("btn2");

const completeForm = document.getElementById("myform");
const secondState = document.getElementById("second-state");


confirmButton.addEventListener("click", validateForm);
continueButton.addEventListener("click", refreshPage);

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


    function validateCred(no) {

        let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

        return cardno.test(String(no).toLowerCase());


    }


    // form validation

    function validateForm() {



    // Checks if name is not blank 

    const nameInput = document.getElementById("fname");
    const nameError = document.getElementById("name-error");

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

    const cvcInput = document.getElementById("cvc");
    const cvcError = document.getElementById("cvc-error");

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

    const mmInput = document.getElementById("expmm");
    const yyInput = document.getElementById("expyy");
    const expError = document.getElementById("exp-error");

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


    // Checks if credit card entry is a number and 16 digits

    const cardInput = document.getElementById("cnumber");
    const cardError = document.getElementById("number-error");

    if (cardInput.value === '' || cardInput.value.length < 16) {

        cardError.innerHTML = "Can't be blank or less than 16 digits";
        cardError.style.display = "block";
        cardInput.style.borderColor = "red";
        errorNum++;

    } else if (isNaN(cardInput.value)) {


        cardError.innerHTML = "Wrong format, numbers only";
        cardError.style.display = "block";
        cardInput.style.borderColor = "red";
        errorNum++;

    } else {

        cardError.style.display = "none";
        errorNum = 0;

    }

    // checks for errors, if none continues to next page

    let formErrors = errorName + errorNum + errorMM + errorYY + errorCVC;

    if (formErrors === 0) {

        submitForm();
    }


}




