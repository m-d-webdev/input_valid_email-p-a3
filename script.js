
let inputemail = document.querySelector('.emial-inpt');

let emailP = document.querySelector(".emailP");
let validEmail = /^[A-Za-z\._\-0-9]*[@][a-zA-Z]*[\.][a-z]{1,6}$/i

inputemail.onchange = () => {
    if (!inputemail.value.match(validEmail)) {
        inputemail.classList.add("borderred");
        emailP.classList.add("emailPl")
        inputemail.focus();
    }
}
inputemail.onkeydown = () => {
    inputemail.classList.remove("borderred");
    emailP.classList.remove("emailPl")
}


