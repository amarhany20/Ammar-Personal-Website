// scripts/main.js

// ! Global scripts start

// ! Global scripts end

// ! index.html scripts start

//

// ! index.html scripts end

// ! partials/navbar.html scripts start

console.log("main.js JavaScript file loaded");
var resumeLink = document.querySelector(".resume-link");
if (resumeLink) {
  resumeLink.href = "./resources/resume/Ammar Hany CV 2024 Global V1.0.pdf";
} else {
  console.error("Resume link not found in navbar");
}

// Set Portfolio link dynamically (Update this link as needed)
var portfolioLink = document.querySelector(".portfolio-link");
if (portfolioLink) {
  portfolioLink.href = "../resources/portfolio";
} else {
  console.error("Portfolio link not found in navbar");
}

// Get the navbar element
const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

// Listen for scroll events
window.addEventListener(
  "scroll",
  function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollingDown = scrollTop > lastScrollTop;

    if (scrollingDown && scrollTop > 60) {
      // Scrolling down and past the header
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("navbar-transparent");
    } else {
      // Scrolling up or at the top of the page
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.add("navbar-transparent");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  },
  false
);

const navbarCollapse = document.querySelector(".navbar-collapse");

// Close navbar when a link is clicked (for mobile screens)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.remove("show");
  });
});
// const darkLightModeToggle = document.querySelector(".btn-dark-light-mode-toggle");
// const moonIcon = darkLightModeToggle.querySelector(".bi-moon");
// const sunIcon = darkLightModeToggle.querySelector(".bi-brightness-high");

// darkLightModeToggle.addEventListener("click", () => {
//   const isDarkMode = document.body.classList.toggle("dark-mode");
//   localStorage.setItem("darkMode", isDarkMode);
//   // Toggle moon and sun icons based on dark mode state
//   moonIcon.classList.toggle("d-none", isDarkMode);
//   sunIcon.classList.toggle("d-none", !isDarkMode);
//   // Update navbar colors for dark mode
//   navbar.classList.toggle("dark-mode", isDarkMode);
//   // Update nav link colors for dark mode
//   navLinks.forEach((link) => {
//     link.classList.toggle("dark-mode", isDarkMode);
//   });
//   // Update table colors for dark mode (if applicable)
//   const table = document.querySelector("table");
//   if (table) {
//     table.classList.toggle("table-dark", isDarkMode);
//   }
// });

// // Automatically detect and set theme mode based on device's preference
// const darkModePreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
// if (darkModePreferred) {
//   document.body.classList.add("dark-mode");
//   localStorage.setItem("darkMode", true);
//   moonIcon.classList.add("d-none"); // Hide moon icon
// } else {
//   document.body.classList.remove("dark-mode");
//   localStorage.setItem("darkMode", false);
//   sunIcon.classList.add("d-none"); // Hide sun icon
// }

// ! partials/navbar.html scripts end

// ! partials/landing.html scripts start

// Set phone number links
var egyptPhoneLink = document.querySelector(".egypt-phone");
if (egyptPhoneLink) {
  egyptPhoneLink.href = "tel:+201061888476";
}

var turkeyPhoneLink = document.querySelector(".turkey-phone");
if (turkeyPhoneLink) {
  turkeyPhoneLink.href = "tel:+905395775990";
}

var swedenPhoneLink = document.querySelector(".sweden-phone");
if (swedenPhoneLink) {
  swedenPhoneLink.href = "tel:+46739793588";
}

// Set Whatsapp links
var egyptWhatsappLink = document.querySelector(".egypt-whatsapp");
if (egyptWhatsappLink) {
  egyptWhatsappLink.href = "https://wa.link/6tcsg3";
}

var turkeyWhatsappLink = document.querySelector(".turkey-whatsapp");
if (turkeyWhatsappLink) {
  turkeyWhatsappLink.href = "https://wa.link/sldkmb";
}

var swedenWhatsappLink = document.querySelector(".sweden-whatsapp");
if (swedenWhatsappLink) {
  swedenWhatsappLink.href = "https://wa.link/tf3837";
}
// ! partials/landing.html scripts end

// ! partials/skills.html scripts start

//...

// ! partials/skills.html scripts end

// ! partials/experience.html scripts start

//...

// ! partials/experience.html scripts end

// ! partials/education.html scripts start

//...

// ! partials/education.html scripts end

// ! partials/certificates.html scripts start

// Set certificate links
var internshipAnimalsaiLink = document.querySelector(".internship-animalsai-certificate");
if (internshipAnimalsaiLink) {
  internshipAnimalsaiLink.href = "./resources/certificates/2023-10 Animals.ai Internship Certificate.pdf";
}

var teknofestLink = document.querySelector(".tekonfeset-certificate");
if (teknofestLink) {
  teknofestLink.href = "./resources/certificates/Ammar Teknofest Certificate.pdf";
}

var udemySelfDrivingCarLink = document.querySelector(".udemy-selfDrivingCar-certificate");
if (udemySelfDrivingCarLink) {
  udemySelfDrivingCarLink.href = "./resources/certificates/Self-Driving Car Certificate UC-b28c626f-132b-4ff3-bea9-89e33052f24a.pdf";
}

// ! partials/certificates.html scripts end

// ! partials/footer.html scripts start

//...

// ! partials/footer.html scripts end
