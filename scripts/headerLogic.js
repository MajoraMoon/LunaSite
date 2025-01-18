function initializeHeaderLogic() {
  const currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (currentPath.includes("projects") && link.href.includes("projects")) {
      link.classList.add("active");
    } else if (currentPath.includes("index") && link.href.includes("index")) {
      link.classList.add("active");
    } else if (currentPath.includes("about") && link.href.includes("about")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
