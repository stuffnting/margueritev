import Modal from "bootstrap/js/dist/modal";
import "./main.scss";

/**
 * Email obfuscation
 */
const mvEmailsButton = document.getElementsByClassName("marguerite-email-button");

const mvEmailAddress = "\u006d\u0061\u0072\u0067\u0075\u0065\u0072\u0069\u0074\u0065\u0040\u006d\u0061\u0072\u0067\u0075\u0065\u0072\u0069\u0074\u0065\u0076\u002e\u006f\u0072\u0067";

Array.from(mvEmailsButton).forEach((el) => {
  el.innerHTML = `<a href="mailto:${mvEmailAddress}" class="btn btn-primary">Email Marguerite</a>`;
});

const mvEmailsBox = document.getElementsByClassName("marguerite-email-box");

Array.from(mvEmailsBox).forEach((el) => {
  el.innerHTML = `<a href="mailto:${mvEmailAddress}" class="btn btn-primary">Email Marguerite Valentine</a>`;
});

/**
 * Make banner a link to the opening quote
 */
function makeBannerElementClickable(element, url) {
  element.style.cursor = "pointer";
  element.addEventListener("click", () => {
    window.location.href = url;
  });
}

// Usage
const element = document.getElementById("banner");
makeBannerElementClickable(element, "#opening-quote");

const modalImages = document.querySelectorAll(".modal-book-cover");

window.addEventListener("resize", () => {
  console.log(modalImages);
  console.log(`New dimensions: ${window.innerWidth}x${window.innerHeight}`);
});
