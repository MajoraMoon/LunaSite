document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".modal .close");
  const downloadBtn = document.getElementById("downloadBtn");

  let scale = 1;
  let isDragging = false;
  let startX,
    startY,
    imgX = 0,
    imgY = 0;


  document.querySelectorAll(".gallery-column img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt || "No description available.I'm lazy to write one.";
      resetZoomAndPosition(); 
    });
  });


  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });


  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  modalImg.addEventListener("wheel", (e) => {
    e.preventDefault();
    const zoomStep = 0.1; 
    scale += e.deltaY < 0 ? zoomStep : -zoomStep;
    scale = Math.min(Math.max(scale, 1), 3); 
    modalImg.style.transform = `translate(-50%, -50%) scale(${scale})`;
  });


  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = modalImg.src;
    link.download = modalImg.src.split("/").pop(); 
    link.click(); 
  });

 
  modalImg.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
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
    
      isDragging = false;
      modalImg.style.cursor = "grab";
    }
  });

 
  function resetZoomAndPosition() {
    scale = 1;
    imgX = 0;
    imgY = 0;
    modalImg.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }
});
