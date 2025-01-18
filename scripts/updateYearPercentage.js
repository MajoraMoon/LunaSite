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

function scheduleMidnightUpdate() {
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // next day
    0,
    0,
    0 // midnight
  );

  const timeUntilMidnight = nextMidnight - now;

  setTimeout(() => {
    updateCurrentDate();
    setInterval(updateCurrentDate, 86400000);
  }, timeUntilMidnight);
}

updateYearProgress();
updateCurrentDate();

setInterval(updateYearProgress, 300000);

scheduleMidnightUpdate();
