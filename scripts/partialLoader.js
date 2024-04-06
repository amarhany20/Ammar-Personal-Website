// scripts/partialLoader.js

// ! Loading Partial HTMLs in Index.html Start

// Function to load partial HTML files into their respective sections
function loadPartialHTML(url, sectionId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(sectionId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading partial HTML:", error));
}

// Load partial HTML files into their respective sections
loadPartialHTML("../partials/navbar.html", "navbar");
loadPartialHTML("../partials/landing.html", "landing");
loadPartialHTML("../partials/skills.html", "skills");
loadPartialHTML("../partials/experience.html", "experience");
loadPartialHTML("../partials/education.html", "education");
loadPartialHTML("../partials/certificates.html", "certificates");
loadPartialHTML("../partials/footer.html", "footer");

// Load main.js after a delay
setTimeout(() => {
  const script = document.createElement("script");
  script.src = "./scripts/main.js";
  document.head.appendChild(script);
}, 10); // 500 milliseconds delay
// ! Loading Partial HTMLs in Index.html End
