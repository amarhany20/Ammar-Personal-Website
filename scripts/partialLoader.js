// scripts/partialLoader.js

// ! Loading Partial HTMLs in Index.html Start

// Function to load partial HTML files into their respective sections
function loadPartialHTML(url, sectionId) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load partial HTML: " + response.status);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(sectionId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading partial HTML:", error));
}

// Load all partial HTML files
Promise.all([
  loadPartialHTML("./partials/navbar.html", "navbar"),
  loadPartialHTML("./partials/landing.html", "landing"),
  loadPartialHTML("./partials/experience.html", "experience"),
  loadPartialHTML("./partials/education.html", "education"),
  loadPartialHTML("./partials/certificates.html", "certificates"),
  loadPartialHTML("./partials/recommendations.html", "recommendations"), // Load recommendations.html
  loadPartialHTML("./partials/skills.html", "skills"),
  loadPartialHTML("./partials/personal-projects.html", "personal-projects"),
  loadPartialHTML("./partials/footer.html", "footer"),
])
  .then(() => {
    // All partial HTML files have been loaded successfully
    // Load main.js
    const script = document.createElement("script");
    script.src = "./scripts/main.js";
    document.head.appendChild(script);
  })
  .catch((error) => console.error("Error loading partial HTML:", error));
// ! Loading Partial HTMLs in Index.html End
