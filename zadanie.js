window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".back-to-top").style.display = "block";
    } else {
      document.querySelector(".back-to-top").style.display = "none";
    }
  }

  function scrollToTop() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });}

  function validateForm() {
      var name = document.forms["feedbackForm"]["name"].value;
      var tlf = document.forms["feedbackForm"]["tlf"].value;
      var specialist = document.forms["feedbackForm"]["specialist"].value;
      

      if (name == "") {
          alert("Пожалуйста, введите ваше ФИО");
          document.forms["feedbackForm"]["name"].focus();
          return false;
      }

      if (tlf ="") {
          alert("Пожалуйста, напишите ваш номер телефона");
          document.forms["feedbackForm"]["tlf"].focus();
          return false;
      }
      
      if (specialist="") {
          alert("Пожалуйста, выберите специалиста");
          document.forms["feedbackForm"]["specialist"].focus();
          return false;
      }
              
      return true;
          }