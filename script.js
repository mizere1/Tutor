const passwords = [
  "4321", "8231", "1134", "6578", "6546", "7897", "8795", "1122", "3344", "5566",
  "7788", "9900", "1212", "3434", "5656", "7878", "9090", "2272", "4844", "6966",
  "8188", "0120", "2468", "1357", "7077", "9999", "3191", "3933", "5525", "7877",
  "9599", "4321", "5678", "9876", "4321", "6789", "8765", "2345", "4321", "1244",
  "5678", "4321", "9876", "5432", "3214", "1523", "6245", "8917", "3548", "1597",
  "7584", "2461", "3548", "8795", "1425", "1729", "2378", "4317", "2874", "3974",
  "5179", "6192", "7192", "8192", "9612", "7212", "9261", "1283", "4298", "5849",
  "6793", "7453", "7261", "1285", "2468", "3579", "4680", "5791", "6902", "8023",
  "9144", "3331", "4442", "5553", "6664", "7775", "8886", "9997", "0008", "4321",
  "3214", "9876", "8765", "6543", "5432", "1234", "2345", "3456", "4567", "5678",
  "6789", "7890", "0123", "0987", "5432", "9876", "3456", "7890", "5612", "9832",
  "4132", "6482", "2408", "9836", "3296", "6850", "5618", "2753", "4203", "1723",
  "5213", "1092", "2139", "3172", "4162", "5276", "6292", "7211", "8231", "9249",
  "1269", "2290", "3312", "4345", "5379", "6414", "7449", "8485", "9512", "5000"
];

function checkPassword() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;

  if (passwords.includes(password)) {
    passwordInput.value = ""; // Clear the input field
    document.querySelector(".login-area").style.display = "none"; // Hide the login area
    document.getElementById("chatbot-container").style.display = "flex"; // Show the chatbot container
    document.getElementById("chatbot-container").style.justifyContent = "center"; // Center the chatbot container
    document.getElementById("chatbot").addEventListener("load", () => {
      setTimeout(() => {
        document.querySelector(".chat-icon").click(); // Open the chatbot automatically
      }, 1000);
    });
  } else {
    alert("Invalid password. Please try again.");
    passwordInput.value = ""; // Clear the input field
}

return false; // Prevent form submission
}

function validatePassword(password) {
const words = password.split(" ");
if (words.length !== 4) return false;
if (password.length > 500) return false;
return true;
}

function restrictPasswordLength() {
const passwordInput = document.getElementById("password");
if (passwordInput.value.length > 4) {
passwordInput.value = passwordInput.value.slice(0, 4);
}
}

document.addEventListener("DOMContentLoaded", () => {
document.getElementById("password").addEventListener("input", restrictPasswordLength);

const chatbotContainer = document.getElementById("chatbot-container");
chatbotContainer.style.display = "none"; // Hide the chatbot container by default
chatbotContainer.style.justifyContent = "center"; // Center the chatbot container

const reportLink = document.createElement("a");
reportLink.href = "mailto:progress@learningplatform.com";
reportLink.innerText = "Report your progress";
reportLink.target = "_blank";
reportLink.rel = "noopener noreferrer";
reportLink.style.position = "absolute";
reportLink.style.top = "10px";
reportLink.style.left = "10px";
reportLink.style.color = "blue";
reportLink.style.textDecoration = "underline";
document.body.appendChild(reportLink);
});