document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  const linkElement = document.querySelector(".kitten-link");

  const svgElement = `
<svg width="60" height="41" viewBox="0 0 4090 2897" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="530" cy="530" r="530" transform="matrix(-1 0 0 1 3558.21 1573.82)" fill="white"/>
<ellipse cx="220" cy="244.5" rx="220" ry="244.5" transform="matrix(-1 0 0 1 3114.2 1859.82)" fill="#160067"/>
<ellipse cx="65" cy="95.5" rx="65" ry="95.5" transform="matrix(-1 0 0 1 2804.2 1912.82)" fill="white"/>
<path d="M3075.1 2272.94C3075.1 2272.94 2974.93 2200.53 2970.09 2231.04C2965.26 2261.55 3048.29 2382.78 3048.29 2382.78L3075.1 2272.94Z" fill="white"/>
<path d="M3970.12 58.1414C3711.51 499.762 2810.41 1145.1 3221.83 1206.21C3633.25 1267.31 3774.3 1460.38 3888.78 1651.06C4003.25 1841.73 4228.72 -383.479 3970.12 58.1414Z" fill="white"/>
<path d="M4028.71 197.816C4096.71 279.316 4027.71 1255.82 3985.71 1290.82C3943.71 1325.82 3985.71 562.316 3985.71 377.316C3985.71 192.317 3420.64 842.316 3435.52 787.41C3450.41 732.504 3960.71 116.317 4028.71 197.816Z" fill="#160058"/>
<circle cx="1061.21" cy="2148.82" r="530" fill="white"/>
<ellipse cx="1195.21" cy="2149.32" rx="220" ry="244.5" fill="#160067"/>
<ellipse cx="1350.21" cy="2053.32" rx="65" ry="95.5" fill="white"/>
<path d="M1014.31 2317.94C1014.31 2317.94 1114.49 2245.53 1119.32 2276.04C1124.16 2306.55 1041.12 2427.78 1041.12 2427.78L1014.31 2317.94Z" fill="white"/>
<path d="M119.296 103.141C377.899 544.762 1279.01 1190.1 867.583 1251.21C456.159 1312.31 315.11 1505.38 200.635 1696.06C86.1605 1886.73 -139.307 -338.479 119.296 103.141Z" fill="white"/>
<path d="M60.7064 242.816C-7.29293 324.316 61.7064 1300.82 103.706 1335.82C145.706 1370.82 103.706 607.316 103.706 422.316C103.706 237.317 668.778 887.316 653.893 832.41C639.008 777.504 128.706 161.317 60.7064 242.816Z" fill="#160058"/>
<path d="M2295.21 2678.82C2295.21 2768.84 2183.05 2896.82 2044.71 2896.82C1906.36 2896.82 1794.21 2768.84 1794.21 2678.82C1794.21 2588.79 1906.36 2515.82 2044.71 2515.82C2183.05 2515.82 2295.21 2588.79 2295.21 2678.82Z" fill="white"/>
</svg>
    `;

  function updateLinkContent(e) {
    if (e.matches) {
      // Mobile Ansicht
      linkElement.innerHTML = svgElement;
    } else {
      // Desktop Ansicht
      linkElement.innerHTML = "";
    }
  }

  // Initial prüfen und Listener hinzufügen
  updateLinkContent(mediaQuery);
  mediaQuery.addEventListener("change", updateLinkContent);
});
