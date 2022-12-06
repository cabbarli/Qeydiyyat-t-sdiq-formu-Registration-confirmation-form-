(function () {
    "use strict"
    let userName = document.querySelector("#name");
    let userEmail = document.querySelector("#e-mail");
    let userPass = document.querySelector("#pass");
    userName.addEventListener("blur", controlUsername);
    userEmail.addEventListener("blur", controlEmail);
    userPass.addEventListener("blur", controlPassword);
    let spacePattern = /^\S*$/;
    function controlUsername() {
      let errorNameMessage = document.querySelector("#errorName");
      if (userName.value.length == 0) {
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
        errorNameMessage.innerHTML = "Ad xanasini bos saxlamayin";
        return false;
      } else if (userName.value.length < 3) {
        userName.classList.remove("is-valid");  
        userName.classList.add("is-invalid");
        errorNameMessage.innerHTML = "İstifadəçi adı 2 simvoldan az olmalıdır";
        return false;
      } else if (userName.value.length > 21) {
        userName.classList.remove("is-valid");
        userName.classList.add("is-invalid");
        errorNameMessage.innerHTML = '20 simvoldan çox olmamalıdır';
        return false;
      } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        errorNameMessage.innerHTML = "";
        return true;
      }
    }
    function controlEmail() {
      let errorEmailMessage = document.querySelector("#errorEmail");
      const myEmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
      if (spacePattern.test(userEmail.value) && myEmailPattern.test(userEmail.value)) {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        errorEmailMessage.innerHTML = "";
        return true;
      } else {
        userEmail.classList.remove('is-valid');
        userEmail.classList.add('is-invalid');
        errorEmailMessage.innerHTML = "Email adresinizi bir daha yoxlayın";
        return false;
      }
    }
    function controlPassword() {
      let errorPassMessage = document.querySelector("#errorPass");
      const passPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (spacePattern.test(userPass.value) && passPattern.test(userPass.value) && userPass.value.length > 7 && userPass.value.length < 21) {
        userPass.classList.remove("is-invalid");
        userPass.classList.add("is-valid");
        errorPassMessage.innerHTML = "";
        return true;
      }else {
        userPass.classList.remove('is-valid');
        userPass.classList.add('is-invalid');
        errorPassMessage.innerHTML = 'Şifreniz 8 - 20 simvol arası olsun, boşluq buraxmayın!. Böyük-kiik hərf, rəqəm və ! @ # $ % ^ & * simvollarindan  istifade edin!';
        return false;
      }
    }
    let myForm = document.querySelector(".need-validate");
    myForm.addEventListener("submit", function (e) {
      if (!myForm.checkValidity() ||
        !controlUsername() ||
        !controlEmail() ||
        !controlPassword()) {
        e.preventDefault();
        e.stopPropagation();
      };
    }, false);
   
  })();