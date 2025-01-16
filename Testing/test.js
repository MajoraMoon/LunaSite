document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("tsparticles")) {
    console.warn(
      "⚠️ Kein <div id='tsparticles'> gefunden! Erstelle eines oder prüfe dein HTML."
    );
    return;
  }

  tsParticles.load({
    id: "tsparticles",
    options: {
      autoPlay: true,
      background: {
        color: { value: "#000000" }, // Hintergrundfarbe, falls leer
      },
      backgroundMask: {
        composite: "destination-out",
        cover: { opacity: 1, color: { value: "#ffffff" } },
        enable: false,
      },
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: { enable: true },
        },
        modes: {
          bubble: { distance: 250, duration: 2, opacity: 0.8, size: 4 },
          grab: { distance: 400, links: { opacity: 1 } },
          repulse: { distance: 400, duration: 0.4 },
        },
      },
      particles: {
        number: {
          value: 160,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
            startValue: "random",
          },
        },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: { min: 0.1, max: 1 },
          direction: "none",
          outModes: { default: "out" },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      zLayers: 100,
      name: "NASA",
      motion: { disable: false, reduce: { factor: 4, value: true } },
    },
  });

  console.log("✅ tsParticles erfolgreich geladen!");
});
