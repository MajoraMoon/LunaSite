const quotes = [
    { text: "Beauty has a lot of colors.", class: "quoteOneStyling" },
    { text: "Simplicity is the ultimate sophistication.", class: "quoteTwoStyling" },
    { text: "Creativity takes courage.", class: "quoteThreeStyling" },
    { text: "Art is the journey of a free soul.", class: "quoteFourStyling" }
  ];


  function changeText(){

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedText = quotes[randomIndex];

    const textElement = document.getElementById("dynamicQuotes");

    textElement.classList.remove(...textElement.classList);

    textElement.textContent = selectedText.text;
  }