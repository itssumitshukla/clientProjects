//
let registerr = document.getElementById('register');
let signIn = document.getElementById('signIn');

registerr.addEventListener('click', loadRegPage);
signIn.addEventListener('click', loadSignPage);

function loadRegPage(){
 window.location.href = '/register/register.html';
};

function loadSignPage(){
  window.location.href = '/signin/signin.html';
 };

 console.log(signIn);