function loadHeaderFooter(selector, filePath, callback) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => {
      console.error("Error loading component: ", error);
    });
}

loadHeaderFooter("header", "header.html", () => {
  initializeHeaderLogic();
});

loadHeaderFooter("footer", "footer.html");
