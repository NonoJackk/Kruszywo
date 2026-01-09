document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav");

    // 1. Obs³uga klikniêcia w Hamburger (Otwórz/Zamknij)
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", (event) => {
            // event.stopPropagation() zapobiega, ¿eby to klikniêcie nie zosta³o od razu
            // z³apane przez 'document' jako "klikniêcie poza menu"
            event.stopPropagation();

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // 2. Obs³uga klikniêcia "Gdziekolwiek indziej" (Zamknij)
        document.addEventListener("click", (event) => {
            // Sprawdzamy, czy menu jest otwarte
            if (navMenu.classList.contains("active")) {

                // Sprawdzamy, czy klikniêcie BY£O wewn¹trz menu
                const isClickInsideMenu = navMenu.contains(event.target);

                // Jeœli klikniêto POZA menu (i nie w hamburgera, bo to obs³u¿yliœmy wy¿ej)
                if (!isClickInsideMenu) {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            }
        });

        // 3. Obs³uga klikniêcia w link wewn¹trz menu (Zamknij po wyborze)
        document.querySelectorAll("nav ul li a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }
});