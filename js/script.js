// Contact form handler (placeholder - can be connected to backend)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting Gator Tech Den! We'll get back to you soon.");
      form.reset();
    });
  }
});
