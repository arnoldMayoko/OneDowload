function startConversion() {
    const totalDuration = 10000; // durée totale de conversion simulée en millisecondes (10 secondes)
    const intervalTime = 100; // intervalle de mise à jour en millisecondes (0.1 seconde)
    let elapsedTime = 0;

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    const interval = setInterval(() => {
        elapsedTime += intervalTime;
        const percentage = Math.min((elapsedTime / totalDuration) * 100, 100);

        progressBar.style.width = percentage + '%';
        progressText.innerText = Math.round(percentage) + '%';

        if (elapsedTime >= totalDuration) {
            clearInterval(interval);
            progressText.innerText = 'Conversion terminée';
        }
    }, intervalTime);
}
