document.addEventListener("DOMContentLoaded", () => {
  const particleId = "tsparticles";

  if (!document.getElementById(particleId)) {
    console.warn(`No <div id='${particleId}'> found. Check your html.`);
    return;
  }

  tsParticles
    .load({
      id: particleId,
      url: "./scripts/lib/particles-config.json",
    })
    .then((container) => {
      console.log("Loaded tsParticles (JSON-Config) successfully!");
    })
    .catch((error) => {
      console.error("Could not load tsParticles-Config:", error);
    });
});
