        function getYearProgress() {
            const now = new Date();
            const start = new Date(now.getFullYear(), 0, 1);
            const end = new Date(now.getFullYear() + 1, 0, 1); 
            const progress = ((now - start) / (end - start)) * 100;
            return progress.toFixed(3); // 2 Nachkommastellen
        }

                function updateYearProgress() {
            document.getElementById("year-in-percentage-update").innerText = `${getYearProgress()}%`;
        }

        updateYearProgress();
        setInterval(updateYearProgress, 6 * 60 * 60 * 1000); 