var cvLink = "./Resources//Resume/Ammar Hany Cv 2023.pdf";
var portfolioLink = "../Pages/projects.html";
var linkedinLink = "https://www.linkedin.com/in/ammar-hany/";
var githubLink = "https://github.com/amarhany20";
var main_email_link = "mailto:ammarhanyezeldin@gmail.com"
var egypt_phone_link = "tel:+201061888476"
var turkey_phone_link = "tel:+905395775990"
var sweden_phone_link = "tel:+46739793588"
var toros_english_transcript_link = "../Resources/Transcripts/2024-04-03 English Google Translated Transcript.pdf"
var toros_turkish_transcript_link = "../Resources/Transcripts/2024-04-03 Turkish Transcript.pdf.pdf"

document.querySelectorAll(".cv-link").forEach(function(link) {
  link.href = cvLink;
});

document.querySelectorAll(".portfolio-link").forEach(function(link) {
  link.href = portfolioLink;
});

document.querySelectorAll(".linkedin-link").forEach(function(link) {
  link.href = linkedinLink;
});

document.querySelectorAll(".github-link").forEach(function(link) {
  link.href = githubLink;
});

document.querySelectorAll(".main-email-link").forEach(function(link) {
  link.href = main_email_link;
});

document.querySelectorAll(".egypt-phone-link").forEach(function(link) {
  link.href = egypt_phone_link;
});

document.querySelectorAll(".turkey-phone-link").forEach(function(link) {
  link.href = turkey_phone_link;
});

document.querySelectorAll(".sweden-phone-link").forEach(function(link) {
  link.href = sweden_phone_link;
});

document.querySelectorAll(".toros-english-transcript-link").forEach(function(link) {
  link.href = toros_english_transcript_link;
});

document.querySelectorAll(".toros-turkish-transcript-link").forEach(function(link) {
  link.href = toros_turkish_transcript_link;
});