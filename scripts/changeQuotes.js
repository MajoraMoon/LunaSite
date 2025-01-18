function observeDynamicText() {
  const textElement = document.getElementById("dynamicQuotes");

  // Setze die .hidden Klasse an, falls sie noch nicht vorhanden ist
  textElement.classList.add("hidden");

  // Aktivere den IntersectionObserver für diesen dynamischen Text
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(textElement);
}

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

  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.className = "general-styling";
    textElement.classList.add(selectedText.class);
    textElement.innerHTML = selectedText.text;

    textElement.style.opacity = 1;
  }, 600);
}

setInterval(changeText, 300000);

changeText();
