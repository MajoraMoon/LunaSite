document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".modal .close");
  const downloadBtn = document.getElementById("downloadBtn"); // Den Download-Button holen

  let scale = 1; // Zoom level
  let isDragging = false;
  let startX,
    startY,
    imgX = 0,
    imgY = 0;

  // Show modal on image click
  document.querySelectorAll(".gallery-column img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt || "No description available.";
      resetZoomAndPosition(); // Reset zoom/position when opening a new image
    });
  });

  // Close modal on close button click
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Zoom in/out using mouse wheel
  modalImg.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomStep = 0.1; // Zoom intensity
    scale += e.deltaY < 0 ? zoomStep : -zoomStep;
    scale = Math.min(Math.max(scale, 1), 3); // Limit zoom between 1x and 3x
    modalImg.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });

  // Download image
  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = modalImg.src; // Bildquelle
    link.download = modalImg.src.split("/").pop(); // Dateiname basiert auf dem Bild
    link.click(); // "Klick" auslösen, um den Download zu starten
  });

  // Dragging functionality
  modalImg.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // Only allow left mouse button
    e.preventDefault(); // Prevent dragging the image to another tab
    isDragging = true;
    startX = e.clientX - imgX;
    startY = e.clientY - imgY;
    modalImg.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    imgX = e.clientX - startX;
    imgY = e.clientY - startY;
    modalImg.style.transform = `translate(calc(-50% + ${imgX}px), calc(-50% + ${imgY}px)) scale(${scale})`;
  });

  document.addEventListener("mouseup", (e) => {
    if (e.button === 0) {
      // Ensure it's the left mouse button
      isDragging = false;
      modalImg.style.cursor = "grab";
    }
  });

  // Reset zoom and position
  function resetZoomAndPosition() {
    scale = 1;
    imgX = 0;
    imgY = 0;
    modalImg.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }
});
