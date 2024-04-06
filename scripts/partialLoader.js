// scripts/partialLoader.js

// Function to load partial HTML files into their respective sections
function loadPartialHTML(url, sectionId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(data, "text/html");
      const fragment = document.createDocumentFragment();

      // Append each element from the parsed HTML to the fragment
      htmlDocument.body.childNodes.forEach((node) => {
        fragment.appendChild(node.cloneNode(true));
      });

      // Replace the content of the section with the fragment
      document.getElementById(sectionId).innerHTML = "";
      document.getElementById(sectionId).appendChild(fragment);
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
