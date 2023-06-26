(function() {
    let captchavalue = "";
  
    function generateCaptcha() {
      let value = Math.random().toString(36).substring(2, 7);
      captchavalue = value;
    }
  
    function setCaptcha() {
      let captchaHTML = captchavalue
        .split("")
        .map((char) => {
          return `<span>${char}</span>`;
        })
        .join("");
      document.querySelector(".preview").innerHTML = captchaHTML;
    }
  
    function initCaptcha() {
      generateCaptcha();
      setCaptcha();
    }
  
    initCaptcha();
  
    document.querySelector(".refresh").addEventListener("click", function() {
      generateCaptcha();
      setCaptcha();
    });
  
    document.querySelector("form").addEventListener("submit", function(e) {
      let inputCaptchaVal = document.querySelector("#captcha-form").value;
      if (inputCaptchaVal === captchavalue) {
        swal("", "Logging In!", "success");
      } else {
        swal("Invalid captcha");
        e.preventDefault(); // Prevent form submission
      }
    });
  })();
  