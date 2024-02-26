var captchaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Genereer een willekeurige CAPTCHA
function generateCaptcha() {
  var captchaText = "";
  for (var i = 0; i < 6; i++) {
    captchaText += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
  }
  return captchaText;
}

// Controleer of de ingevoerde tekst overeenkomt met de CAPTCHA
function checkCaptcha() {
  var userInput = document.getElementById("userInput").value;
  var captcha = document.getElementById("captcha").textContent;
  var resultText = document.getElementById("result");
  
  if (userInput === captcha) {
    resultText.textContent = "CAPTCHA correct!";
    resultText.style.color = "green";
    var sendbutton = document.getElementById('sendButton')
    sendbutton.classList.add('show');
  } else {
    resultText.textContent = "CAPTCHA onjuist, probeer opnieuw.";
    resultText.style.color = "red";
  }
}

// Ververs de CAPTCHA
function refreshCaptcha() {
  var captcha = generateCaptcha();
  document.getElementById("captcha").textContent = captcha;
  document.getElementById("userInput").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("result").style.color = "";
}

// Initialisatie
window.onload = function() {
  refreshCaptcha();
};
