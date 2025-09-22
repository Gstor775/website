document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          statusDiv.textContent = "✅ Thank you! Your message has been sent.";
          statusDiv.style.color = "#00ffcc";
          form.reset();
        } else {
          statusDiv.textContent = "❌ Oops! There was a problem sending your message.";
          statusDiv.style.color = "red";
        }
      } catch (error) {
        statusDiv.textContent = "❌ Network error. Please try again later.";
        statusDiv.style.color = "red";
      }
    });
  }
});
