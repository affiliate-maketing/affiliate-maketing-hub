const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
const config = window.SITE_CONFIG || {};
const whatsapp = document.getElementById("whatsapp-link");
const email = document.getElementById("email-link");
const validPhone = config.whatsappNumber && /^\\d{10,15}$/.test(config.whatsappNumber);
if (validPhone) {
  whatsapp.href = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent("Hello Affiliate Marketing Hub, I would like to make an enquiry.")}`;
} else {
  whatsapp.href = "https://wa.me/";
  whatsapp.addEventListener("click", event => {
    if (!validPhone) {
      event.preventDefault();
      alert("Please add your WhatsApp number in config.js before using this link.");
    }
  });
}
if (config.emailAddress && !config.emailAddress.includes("example.com")) {
  email.href = `mailto:${config.emailAddress}?subject=${encodeURIComponent("Enquiry - Affiliate Marketing Hub")}`;
} else {
  email.href = "mailto:";
  email.addEventListener("click", event => {
    if (!config.emailAddress || config.emailAddress.includes("example.com")) {
      event.preventDefault();
      alert("Please add your email address in config.js before using this link.");
    }
  });
}
document.getElementById("year").textContent = new Date().getFullYear();
