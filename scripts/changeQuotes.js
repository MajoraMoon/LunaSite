const quotes = [
  { text: "Beauty has a lot of colors.", class: "quoteOneStyling" },
  { text: "We don't win in the end.", class: "quoteTwoStyling" },
  {
    text: "Beauty fades.<br />That's why it is beautiful.",
    class: "quoteThreeStyling",
  },
  {
    text: "Angel playing disgusted<br />with devil's faces.",
    class: "quoteFourStyling",
  },
];

function changeText() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedText = quotes[randomIndex];

  const textElement = document.getElementById("dynamicQuotes");

  textElement.className = "general-styling";
  textElement.classList.add(selectedText.class);

  textElement.innerHTML = selectedText.text;
}

setInterval(changeText, 300000);

changeText();
