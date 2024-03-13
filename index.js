document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");

  function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("Zohaibalid@gmail.com").value;
    const password = document.getElementById("Zohaibkhan123").value;

    if (email && password) {
      message.style.display = "block";

      loginForm.style.display = "none";
    } else {
      alert("Please fill in both Email and password fields.");
    }
  }
  loginForm.addEventListener("click", handleSubmit);
});
