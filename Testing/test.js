        function getYearProgress() {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 1); // 1. Januar
            const end = new Date(now.getFullYear() + 1, 0, 1); // 1. Januar nächstes Jahr
            const progress = ((now - start) / (end - start)) * 100;
            return progress.toFixed(3); // 2 Nachkommastellen
        }

                function updateYearProgress() {
            document.getElementById("year-progress").innerText = `Das Jahr ist zu ${getYearProgress()}% vorbei.`;
        }

        updateYearProgress(); // Direkt beim Laden ausführen
        setInterval(updateYearProgress, 6 * 60 * 60 * 1000); // Alle 6 Stunden (21600000 ms) aktualisieren