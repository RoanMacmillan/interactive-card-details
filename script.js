



const nameInput = document.getElementById("fname");
const nameError = document.getElementById("name-error");

const cvcInput = document.getElementById("cvc");
const cvcError = document.getElementById("cvc-error");

const mmInput = document.getElementById("expmm");
const yyInput = document.getElementById("expyy");
const expError = document.getElementById("exp-error");

const cardInput = document.getElementById("cnumber");
const cardError = document.getElementById("number-error");


const confirmButton = document.getElementById("btn1");


confirmButton.addEventListener("click", (event) => {

    event.preventDefault();

    // Checks if name is not blank 

    if (nameInput.value === '') {

        nameError.innerHTML = "Can't be blank";
        nameError.style.display = "block";
        nameInput.style.borderColor = "red";

    } else {

        nameError.style.display = "none";
    }

    // Checks if cvc is a number and correct format

    if (cvcInput.value === '') {

        cvcError.innerHTML = "Can't be blank";
        cvcError.style.display = "block";
        cvcInput.style.borderColor = "red";

    } else if (cvcInput.value.length < 3 || isNaN(cvcInput.value)) {

        cvcError.innerHTML = "Invalid CVC";
        cvcError.style.display = "block";
        cvcInput.style.borderColor = "red";


    } else {

        cvcError.style.display = "none";

    }

    // Checks if expiry date is a number and correct format

    if (mmInput.value === '' || yyInput.value === '') {

        expError.innerHTML = "Can't be blank";
        expError.style.display = "block";
        mmInput.style.borderColor = "red";
        yyInput.style.borderColor = "red";

    } else if (mmInput.value.length < 2 || yyInput.value.length < 2 || mmInput.value === 0 || mmInput < 01 || mmInput.value > 12 || yyInput.value < 22 || isNaN(mmInput.value) || isNaN(yyInput.value)) {

        expError.innerHTML = "Invalid Expiry Date";
        expError.style.display = "block";
        yyInput.style.borderColor = "red";
        mmInput.style.borderColor = "red";

    }

       else {

        expError.style.display = "none";

    }


    // Checks if credit card entry is a number and 16 digits

        if (cardInput.value === '' || cardInput.value.length < 16 ) {

            cardError.innerHTML = "Can't be blank or less than 16 digits";
            cardError.style.display = "block";
            cardInput.style.borderColor = "red";

        } else if (isNaN(cardInput.value)) {


            cardError.innerHTML = "Wrong format, numbers only";
            cardError.style.display = "block";
            cardInput.style.borderColor = "red";


        } else {

            cardError.style.display = "none";

        }


})




