function initializeHeaderLogic() {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    if (link.href.endsWith(currentPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
