// Simple FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === "block";

    // Close all answers first
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      ans.style.display = "none";
      ans.previousElementSibling.querySelector("span").textContent = "+";
    });

    // Toggle clicked one if it wasn't open
    if (!isOpen) {
      answer.style.display = "block";
      question.querySelector("span").textContent = "-";
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* Conection envio email */
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "-L-8YWqpfGsYhM22O",
  });
})();
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_q0e6lbs", "template_zugll5r", this).then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Falha ao enviar. Tente novamente.");
        }
      );
    });
};