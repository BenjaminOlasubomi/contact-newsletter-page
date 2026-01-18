const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  formMessage.className = "form-message";

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.classList.add("error");
    return;
  }

  if (!isValidEmail(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.classList.add("success");
  contactForm.reset();
});

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("newsletterEmail").value.trim();
  newsletterMessage.className = "form-message";

  if (!email) {
    newsletterMessage.textContent = "Email is required.";
    newsletterMessage.classList.add("error");
    return;
  }

  if (!isValidEmail(email)) {
    newsletterMessage.textContent = "Please enter a valid email address.";
    newsletterMessage.classList.add("error");
    return;
  }

  newsletterMessage.textContent = "Subscribed successfully!";
  newsletterMessage.classList.add("success");
  newsletterForm.reset();
});
