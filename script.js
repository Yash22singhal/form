const name_input = document.getElementById('nameField');
const phone_input = document.getElementById('phoneField');
const password_input = document.getElementById('passwordField');
const cnfpassword_input = document.getElementById('confirmField');

name_input.addEventListener('input', function(e){
    if (e.target.value.length <5){
        e.target.setCustomValidity('Name must contain atleast 5 characters');
    }
    else{
        e.target.setCustomValidity('');
    }
});

phone_input.addEventListener('input', function(e){
    if ((e.target.value.length != 10) || (e.target.value == 1234567890)){
        e.target.setCustomValidity('Please enter a valid phone number');
    }
    else{
        e.target.setCustomValidity('');
    }
});

password_input.addEventListener('input', function(e){
    if ((e.target.value.length <8) || (['password', 'Password', 'PASSWORD', name_input.value].indexOf(e.target.value) > -1)){
        e.target.setCustomValidity('Password is not strong');
    }
    else if(password_input.value != cnfpassword_input.value){
        e.target.setCustomValidity('');
        cnfpassword_input.setCustomValidity('Password does not match with previously entered password.');
    }
    else{
        e.target.setCustomValidity('');
    }
});

cnfpassword_input.addEventListener('change', function(e){
    if (e.target.value != password_input.value){
        e.target.setCustomValidity('Password does not match with previously entered password.');
    }
    else{
        e.target.setCustomValidity('');
    }
});