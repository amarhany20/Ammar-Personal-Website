// scripts/main.js

// ! Global scripts start

console.log("main.js JavaScript file loaded");

// ! Global scripts end

// ! index.html scripts start

//

// ! index.html scripts end

// ! partials/navbar.html scripts start

// Set CV link dynamically
var cvLinks = document.querySelectorAll(".cv-link");
cvLinks.forEach(function (link) {
  link.href = "./redirector.html?class=" + encodeURIComponent(link.classList[0]);
});

// Set Portfolio link dynamically
var portfolioLinks = document.querySelectorAll(".portfolio-link");
portfolioLinks.forEach(function (link) {
  link.href = "./redirector.html?class=" + encodeURIComponent(link.classList[0]);
});

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

// Set certificate links dynamically
var internshipAnimalsaiLink = document.querySelector(".internship-animalsai-certificate");
if (internshipAnimalsaiLink) {
  internshipAnimalsaiLink.href = "./redirector.html?class=" + encodeURIComponent(internshipAnimalsaiLink.className);
}

var teknofestLink = document.querySelector(".tekonfeset-certificate");
if (teknofestLink) {
  teknofestLink.href = "./redirector.html?class=" + encodeURIComponent(teknofestLink.className);
}

var udemySelfDrivingCarLink = document.querySelector(".udemy-selfDrivingCar-certificate");
if (udemySelfDrivingCarLink) {
  udemySelfDrivingCarLink.href = "https://ude.my/UC-b28c626f-132b-4ff3-bea9-89e33052f24a";
}

var udemyPythonBootcamp = document.querySelector(".udemy-PythonBootcamp-certificate");
if (udemyPythonBootcamp) {
  udemyPythonBootcamp.href = "https://ude.my/UC-9615c4dd-a278-45ab-800f-78eeb80e5e66/";
}

// ! partials/certificates.html scripts end

// ! partials/recommendation.html scripts start

// Set recommendation link dynamically
var recommendationLink = document.querySelector(".animalsai-recommendation-link");
if (recommendationLink) {
  recommendationLink.href = "./redirector.html?class=" + encodeURIComponent(recommendationLink.className);
}

// ! partials/recommendation.html scripts end

// ! partials/personal-projects.html scripts start

//...

// ! partials/personal-projects.html scripts end

// ! partials/footer.html scripts start

// ! partials/personal-projects.html scripts start

// Connect 4 Game
var connect4Link = document.querySelector(".connect-4-link");
if (connect4Link) {
  connect4Link.href = "https://github.com/amarhany20/Jquery-Connect-4-Game";
}

var connect4Link = document.querySelector(".connect-4-test-link");
if (connect4Link) {
  connect4Link.href = "https://amarhany20.github.io/Jquery-Connect-4-Game/";
}

// Forums Web Application
var forumsWebAppLink = document.querySelector(".forums-web-app-link");
if (forumsWebAppLink) {
  forumsWebAppLink.href = "https://github.com/amarhany20/Toros-University-ASP.NET-MVC-FORUMS-APP";
}

// Self-Driving Car Using Behavioral Cloning
var selfDrivingCarLink = document.querySelector(".self-driving-car-link");
if (selfDrivingCarLink) {
  selfDrivingCarLink.href = "https://github.com/amarhany20/Private-Self-Driving-Car";
}

// Engineering Firm Website
var engineeringFirmLink = document.querySelector(".engineering-firm-link");
if (engineeringFirmLink) {
  engineeringFirmLink.href = "https://github.com/amarhany20/laravel-CompanyWebsiteVersion2";
}
// Engineering Firm Website
var engineeringFirmLink = document.querySelector(".engineering-firm-2-link");
if (engineeringFirmLink) {
  engineeringFirmLink.href = "https://github.com/amarhany20/laravel-CompanyWebsiteVersion1--Version2InProgress";
}

// Company Management App
var companyManagementLink = document.querySelector(".company-management-link");
if (companyManagementLink) {
  companyManagementLink.href = "https://github.com/amarhany20/IStone-Company-Management";
}

// Inventory System
var inventorySystemLink = document.querySelector(".inventory-system-link");
if (inventorySystemLink) {
  inventorySystemLink.href = "https://github.com/amarhany20/Personal-CSharp-WPF-InventorySystem";
}

// Robust Multithreaded Web Crawler
var webCrawlerLink = document.querySelector(".web-crawler-link");
if (webCrawlerLink) {
  webCrawlerLink.href = "https://github.com/amarhany20/Toros-University-WebCrawler-CSHARP-WPF-MSSQL";
}

// Windows Notes App
var windowsNotesLink = document.querySelector(".windows-notes-link");
if (windowsNotesLink) {
  windowsNotesLink.href = "https://github.com/amarhany20/csharp_wpf_notesapp";
}

// School Library System
var librarySystemLink = document.querySelector(".library-system-link");
if (librarySystemLink) {
  librarySystemLink.href = "https://github.com/amarhany20/Toros-University-Library-System-CSHARP-WPF-MSSQL";
}

// School Management System
var managementSystemLink = document.querySelector(".management-system-link");
if (managementSystemLink) {
  managementSystemLink.href = "https://github.com/amarhany20/TOROS-UNIVERSITY-PROJECTS/tree/main/Java%20School%20Management%20Project/AmmarHanyEzeldinAbdelrazik195050902Java/SchoolManagementSystem";
}

// Cashier System
var cashierSystemLink = document.querySelector(".cashier-system-link");
if (cashierSystemLink) {
  cashierSystemLink.href = "https://github.com/amarhany20/Toros-University-Cashier-System-CSHARP-WPF";
}

// ! partials/personal-projects.html scripts end

// ! partials/footer.html scripts end
