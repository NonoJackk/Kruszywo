document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    // --- CZĘŚĆ A: POBIERANIE DANYCH Z KALKULATORA ---
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    const msgParam = urlParams.get('msg');

    const subjectField = document.getElementById('form-subject');
    const messageField = document.getElementById('form-message');

    if (subjectParam && subjectField) {
        subjectField.value = decodeURIComponent(subjectParam);
    }
    if (msgParam && messageField) {
        messageField.value = decodeURIComponent(msgParam);
    }

    // 2. BEZPIECZNA INICJALIZACJA EMAILJS
    // Robimy to w bloku try-catch, żeby błąd tutaj nie psuł reszty strony
    try {
        if (typeof emailjs !== 'undefined') {
            emailjs.init("TWOJ_PUBLIC_KEY");
        } else {
            console.warn("Biblioteka EmailJS nie została znaleziona.");
        }
    } catch (error) {
        console.error("Błąd inicjalizacji EmailJS:", error);
    }
    // --- CZĘŚĆ B: WYSYŁKA FORMULARZA ---
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Zabezpieczenie przed brakiem elementu honeypot
            const honeypot = document.getElementById('honeypot');
            if (honeypot && honeypot.value !== "") {
                console.log("Bot detected!");
                return;
            }

            const btn = document.getElementById('button-send');
            btn.innerText = 'Wysyłanie...';

            // Wysyłka przez EmailJS (Pamiętaj o kluczach!)
            emailjs.sendForm('TWOJA_SERVICE_ID', 'TWOJ_TEMPLATE_ID', this)
                .then(() => {
                    btn.innerText = 'Wysłano pomyślnie!';
                    contactForm.reset();
                    alert("Dziękujemy! Wiadomość została wysłana.");
                }, (err) => {
                    btn.innerText = 'Błąd wysyłki';
                    alert("Wystąpił błąd: " + JSON.stringify(err));
                });
        });
    }
});