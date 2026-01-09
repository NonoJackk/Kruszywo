document.addEventListener('DOMContentLoaded', () => {
    const inputs = ['calc-length', 'calc-width', 'calc-depth', 'calc-type'];

    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', calculate);
    });

    function calculate() {
        const l = parseFloat(document.getElementById('calc-length').value) || 0;
        const w = parseFloat(document.getElementById('calc-width').value) || 0;
        const d = (parseFloat(document.getElementById('calc-depth').value) || 0) / 100;
        const density = parseFloat(document.getElementById('calc-type').value);

        // Walidacja: jeśli jakakolwiek wartość jest <= 0, nie licz dalej
        if (l <= 0 || w <= 0 || d <= 0) {
            document.getElementById('res-volume').innerText = "0.00";
            document.getElementById('res-weight').innerText = "0.00";
            return;
        }
        const volume = l * w * d;
        const weight = volume * density;

        document.getElementById('res-volume').innerText = volume.toFixed(2);
        document.getElementById('res-weight').innerText = weight.toFixed(2);
    }
});

function contactWithData() {
    const tons = document.getElementById('res-weight').innerText;
    const material = document.getElementById('calc-type').options[document.getElementById('calc-type').selectedIndex].text;
    const message = `Dzień dobry, 
proszę o wycenę oferty na ${tons} ton materiału: ${material}.
Pozdrawiam,`;

    // Przekierowanie do strony kontaktowej z gotową wiadomością w URL
    window.location.href = `contact.html?subject=Wycena&msg=${encodeURIComponent(message)}`;
}