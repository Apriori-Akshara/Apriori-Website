function sendMail() {
  var Params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_18q3vr9", "template_03nu56j", Params).then(function () {
    alert("Message has been sent");
  });
}
