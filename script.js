const signUpButton = document.getElementById('signUpButton');
const signInbuttton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');


signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})

signInbuttton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none"
})