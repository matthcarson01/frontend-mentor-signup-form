const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
var formSuccess=true;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkTextInput(firstName);
    checkTextInput(lastName);
    checkEmailInput(email);
    checkPasswordInput(password);

    if(formSuccess){
        return console.log('Submit Successful')
    }else {
        return console.log('Submit failed')
    }

})

const checkTextInput = (input) => {
    //check if value exist for text input
    if(input.value.trim() === ''){
        formSuccess = false;
        return addErrorClass(input)
    } else {
        return 
    }
}

const checkEmailInput = (input) => {
    //Regular Expression for Email
        const rEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //check if value of email
    if(input.value.trim() === ''){
        formSuccess = false;
        return addErrorClass(input)
    }else if(rEx.test(String(input.value.trim()).toLowerCase())){
        formSuccess = false;
        return addErrorClass(input)
    } else {
        return
    }
}

const checkPasswordInput = (input) => {
     //check if value of password
    if(input.value.trim() === ''){
        formSuccess = false;
        return addErrorClass(input)
    } else {
        return
    }
}

const addErrorClass = (targetElement) => {
   return targetElement.parentElement.classList.add('error');
}