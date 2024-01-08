let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let score = document.getElementById("score");
let loveMessage = document.getElementById("loveMessage");

function init() {
  if (!name1.value || !name2.value) return;

  let loverPercentage = calculateLoveBetween(name1.value, name2.value);

  // If either name is "Rohit" or "Rahee", set loverPercentage to 100
  if (
    name1.value.toLowerCase() === "rohit" ||
    name2.value.toLowerCase() === "rohit" ||
    name1.value.toLowerCase() === "rahee" ||
    name2.value.toLowerCase() === "rahee"
  ) {
    loverPercentage = 100;
  }

  score.innerHTML = loverPercentage + "%";

  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({
    emojis: ["❤️"],
    emojiSize: 50,
    confettiNumber: 100,
  });

  // Show love message after 1 minute
  setTimeout(function () {
    showPopup(loverPercentage);
  }, 1000);
}

function calculateLoveBetween(name1, name2) {
  let combineNames = name1 + name2;

  let uniqNames = [...new Set(combineNames.toLowerCase())];

  let total = 0;

  for (var char of uniqNames) {
    total += char.charCodeAt();
  }

  let loverPercentage = (total % 100) + 1;

  return loverPercentage;
}

function showPopup(loverPercentage) {
  let message =
    " I love you Rahee ❤️ Tu majha sathi khup special aahe ha thodi aahe khadus😂 pan jaashi aahe mala avadte tu👩‍❤️‍👨    - Rohit kharwar";

  // Customize the message based on the loverPercentage
  if (loverPercentage < 50) {
    message = "Maybe we need to work on our love...";
  } else if (loverPercentage < 80) {
    message = "You are special to me!";
  }

  loveMessage.innerHTML = message;
}
