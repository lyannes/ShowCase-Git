// function sendEmail() {
//   var form = document.getElementById("contactform");
//   var formData = new FormData(form);

//   fetch("http://localhost:5068/Mail/sendEmail", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(Object.fromEntries(formData)),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       return response.text();
//     })
//     .then((data) => {
//       console.log("Success:", data);
//       alert("The mail is on the plane way to the northpole!");
//       resetForm();
//     })
//     .catch((error) => {
//       alert("The mail did not make it on the plane way to the northpole.");
//       console.error("Error:", error);
//     });
// }
function sendEmail() {
  var sendButton = document.getElementById("sendButton");
  var spinner = document.getElementById("spinner");
  var form = document.getElementById("contactform");
  var formData = new FormData(form);

  // Toon spinner en deactiveer de knop
  spinner.classList.remove("hidden");
  sendButton.disabled = true;

  fetch("http://localhost:5068/Mail/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return response.text();
    })
    .then((data) => {
      console.log("Success:", data);
      alert("The mail is on the plane way to the northpole!");
      resetForm();
    })
    .catch((error) => {
      alert("The mail did not make it on the plane way to the northpole.");
      console.error("Error:", error);
    })
    .finally(() => {
      spinner.classList.add("hidden");
      sendButton.disabled = false;
    });
}

function resetForm() {
  var inputs = document.querySelectorAll('.input');
  inputs.forEach(function(input) {
      input.classList.remove('valid');
  });
  document.getElementById("contactform").reset();
}