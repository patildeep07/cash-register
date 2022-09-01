const billAmount = document.querySelector("#bill-amount");
const givenAmount = document.querySelector("#given-amount")
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".number-of-notes");

const secondHalf = document.querySelector(".block");
const nextButton = document.querySelector("#show-change-given")

var notesAvailable = [2000, 500, 200, 100, 20, 5, 1];

nextButton.addEventListener("click", validateAmount);
checkButton.addEventListener("click", returnGivenAmount);

hideMessage();
hideBlock();

function validateAmount() {
    if (billAmount.value > 0) {
        hideMessage();
        showBlock();
    }
    else {
        showMessage();
        hideBlock();
        displayMsg("Please re-check the amount entered.!!!")
    }
}

function returnGivenAmount (){    

    if ((billAmount.value - givenAmount.value) <= 0 ) {
        hideMessage();
        var amountToBeReturned = givenAmount.value - billAmount.value ;
        calculateChange(amountToBeReturned);
        
    }
    else {
        showMessage();
        displayMsg("Given amount less than Bill")
    }
    
} 



function calculateChange (val) {
    for(i=0 ; i <= notesAvailable.length ; i++) {
        var numberNotes = Math.trunc(val / notesAvailable[i]);
        noOfNotes[i].innerText = numberNotes
        val = val % notesAvailable[i]
    }
}


function displayMsg (msg) {
    message.innerText = msg
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage() {
    message.style.display = "block";
}

function hideBlock () {
    secondHalf.style.display = "none";
}

function showBlock () {
    secondHalf.style.display = "block";
}