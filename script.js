const signinBtn = document.querySelector('.signinBtn'),
  signupBtn = document.querySelector('.signupBtn'),
  formBx = document.querySelector('.formBx');

signupBtn.onclick = function () {
  formBx.classList.add('active');
};

signinBtn.onclick = function () {
  formBx.classList.remove('active');
};
