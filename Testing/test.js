document.addEventListener("DOMContentLoaded", () => {
  const particleId = "tsparticles";

  if (!document.getElementById(particleId)) {
    console.warn(`No <div id='${particleId}'> found. Check your html.`);
    return;
  }

  // tsParticles mit externer JSON-Config laden
  tsParticles
    .load({
      id: particleId,
      url: "Particles-conf.json",
    })
    .then((container) => {
      console.log("✅ tsParticles (JSON-Config) erfolgreich geladen!");
    })
    .catch((error) => {
      console.error("❌ Fehler beim Laden der tsParticles-Config:", error);
    });
});
