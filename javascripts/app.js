window.addEventListener("load", function () {
    AOS.init({
      duration: 1000,
      once: true,
    });
  
    let form = document.querySelector("form.php-email-form");
    let inputName = document.querySelector("input[name='name']");
    let inputEmail = document.querySelector("input[name='email']");
    let inputSubject = document.querySelector("input[name='subject']");
    let inputMessage = document.querySelector("textarea[name='message']");
  
    let errorName = document.querySelector("div.validate-name");
    let errorEmail = document.querySelector("div.validate-email");
    let errorSubject = document.querySelector("div.validate-subject");
    let errorMessage = document.querySelector("div.validate-message");
  
    let loadingRing = document.querySelector(".lds-ring");
  
    let errors = {
      name: "El campo no puede quedar vacio",
      mail: "El campo no puede quedar vacio",
      messaje: "El campo no puede quedar vacio",
      subject: "El campo no puede quedar vacio",
    };
  
    let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
    
    document.querySelector("button.openbtn").onclick = openNav;
  
    document.querySelector("a.closebtn").onclick = closeNav;
  
    document.addEventListener("click", function (event) {
      let isClickInside = document
        .getElementById("mySidebar")
        .contains(event.target);
      if (document.getElementById("mySidebar").style.width == "250px") {
        setTimeout(function () {
          if (!isClickInside) {
            closeNav();
          }
        }, 6000);
      }
    });
  });
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  