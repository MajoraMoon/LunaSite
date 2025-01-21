function removeBrTags() {
  // Überprüfen, ob die Bildschirmbreite kleiner als 800px ist
  if (window.matchMedia("(max-width: 800px)").matches) {
    const aboutTextContainer = document.querySelector(".about-me-text-layout");

    // Alle <br>-Tags innerhalb des Containers finden
    const brTags = aboutTextContainer.querySelectorAll("br");

    // <br>-Tags entfernen
    brTags.forEach((br) => br.remove());
  }
}

// Funktion beim Laden der Seite ausführen
removeBrTags();

// Funktion ausführen, wenn die Fenstergröße geändert wird
window.addEventListener("resize", removeBrTags);
