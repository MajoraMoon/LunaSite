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

loadHeaderFooter("header", "../../html/projects/header.html", () => {
  initializeHeaderLogic();
});

loadHeaderFooter("footer", "../../html/projects/footer.html");
