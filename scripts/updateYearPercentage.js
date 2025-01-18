function getYearProgress() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);
  const progress = ((now - start) / (end - start)) * 100;
  return progress.toFixed(3);
}

function updateYearProgress() {
  document.getElementById(
    "year-in-percentage-update"
  ).innerText = `${getYearProgress()}%`;
}

function updateCurrentDate() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  document.querySelector(".dynamic-date-year-text").innerText = formattedDate;
}

updateYearProgress();
updateCurrentDate();

setInterval(updateYearProgress, 300000);
setInterval(updateCurrentDate, 86400000);
