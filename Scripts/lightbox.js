document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img-enlarged');

    // Wybieramy wszystkie obrazki z Twoich konkretnych sekcji
    const images = document.querySelectorAll('.desc-section img, .about-gallery img, .project-gallery-grid img');

    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "flex"; // Pokazujemy modal
            modalImg.src = this.getAttribute('data-full') || this.src;     // Przypisujemy Ÿród³o klikniêtego zdjêcia
        });
    });

    // Zamykanie po klikniêciu w dowolne miejsce modala (t³o lub X)
    modal.addEventListener('click', function (e) {
        // Jeœli klikniêto w modal (t³o), a NIE w samo zdjêcie, zamknij go
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
});