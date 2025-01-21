function removeBrTags() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    const aboutTextContainer = document.querySelector(".about-me-text-layout");

    const brTags = aboutTextContainer.querySelectorAll("br");

    brTags.forEach((br) => br.remove());
  }
}

removeBrTags();

window.addEventListener("resize", removeBrTags);
