'use strict'

/*window.addEventListener('load', function(){
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
})*/


  
  const nombre = document.getElementById("exampleInputName1");
  
  var form = document.getElementById("form");

  form.addEventListener("submit", e =>{
      e.preventDefault()
      nombre.classList.remove('is-valid', 'is-invalid');
      var nombreError = 'Error';

      if(nombre.value.length <= 6){
        nombre.classList.add('is-invalid');
        nombreError = 'Tonto, que son 6 caracteres';
      } else if(nombre.value.includes('@')) {
        nombre.classList.add('is-invalid');
        nombreError = 'Seras soplapollas... sin espacios!!!';
      }else{
        nombre.classList.add('is-valid');
      }
      
      document.getElementById('nameFeedback').innerHTML = nombreError;
  })

  

  /*function validarCorreo (email){  
    form.addEventListener("submit", e =>{
      // e.preventDefault()
      email.classList.remove('is-valid', 'is-invalid');
      var emailCorrecto = 'correcto';
      var emailError = 'Error';
      var expReg= "/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/";
      var validarEmail= expReg.test(email.value);


      if(validarEmail==true){
        email.classList.add('is-valid');
        emailCorrecto = 'Mae mia, ereh la caña tio';
      }else{
        email.classList.add('is-invalid');
        emailError = 'Tonto, ponte arroba y esas cosas';
      }
        document.getElementById('emailfeed').innerHTML = emailCorrecto;
        document.getElementById('emailinfeed').innerHTML = emailError;
    })
    
  };*/

    
    //e.preventDefault()
   
    var emailCorrecto = 'correcto';
    var emailError = 'Error';
    var email = document.getElementById('exampleInputEmail1');
    

    form.addEventListener("submit", e =>{
      email.classList.remove('is-valid', 'is-invalid');
      if(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email.value)==true){
        email.classList.add('is-valid');
       //email.className += "is-valid";
       //email.addClass('is-valid');
        emailCorrecto = 'Mae mia, ereh la caña tio';
      }else{
        email.classList.add('is-invalid');
        //email.className += "is-invalid";
        //email.addClass('is-invalid');
        emailError = 'Tonto, ponte arroba y esas cosas';
      }
        document.getElementById('emailfeed').innerHTML = emailCorrecto;
        document.getElementById('emailinfeed').innerHTML = emailError;
    });

    var password = document.getElementById('exampleInputPassword1');

    var passwordCorrecto = 'correcto';
    var passwordError = 'Error';
    
    form.addEventListener("submit", e =>{
      password.classList.remove('is-valid', 'is-invalid');
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(password.value)==true){
        password.classList.add('is-valid');
        passwordCorrecto = 'Mae mia, ereh la caña tio';
      }else{
        password.classList.add('is-invalid');
        passwordError = 'Tonto, ponte mayusculas y esas cosas';
      }
        document.getElementById('passwordfeed').innerHTML = passwordCorrecto;
        document.getElementById('passwordinfeed').innerHTML = passwordError;
    });

    var password2 = document.getElementById('exampleInputPassword2');

    var password2Correcto = 'correcto';
    var password2Error = 'Error';
    
    form.addEventListener("submit", e =>{
      password2.classList.remove('is-valid', 'is-invalid');
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(password2.value)==true){
        password2.classList.add('is-valid');
        password2Correcto = 'Mae mia, ereh la caña tio';
      }else{
        password2.classList.add('is-invalid');
        password2Error = 'Tonto, ponte mayusculas y esas cosas';
      }
        document.getElementById('passwordfeed2').innerHTML = password2Correcto;
        document.getElementById('passwordinfeed2').innerHTML = password2Error;
    });