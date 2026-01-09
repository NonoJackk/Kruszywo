const serviceDetails = {
    'piasek-02': {
        title: 'Piasek 0/2',
        description: 'Drobny piasek idealny do zapraw budowlanych, tynków oraz do prac wykończeniowych i stabilizacyjnych.',
        images: ['Images/Kruszywa/piasek_0-2.jpg', 'Images/Kruszywa/Piasek_0-2/1.jpg', 'Images/Kruszywa/Piasek_0-2/2.jpg'],
        calcValue: '1.6'
    },
    'piasek-03': {
        title: 'Piasek 0/3',
        description: 'Większa frakcja piasku, doskonała do podsypek pod kostkę brukową, chodniki oraz do budowy fundamentów i innych prac budowlanych.',
        images: ['Images/Kruszywa/piasek_0-3.jpg', 'Images/Kruszywa/Piasek_0-3/1.jpg', 'Images/Kruszywa/Piasek_0-3/2.jpg'],
        calcValue: '1.6'
    },
    'zwir-28': {
        title: 'Żwir 2/8',
        description: 'Średnioziarnisty żwir, często stosowany jako podłoże w budowie dróg, na podjazdy, do drenaży i jako element dekoracyjny w ogrodach.',
        images: ['Images/Kruszywa/zwir_2-8.jpg', 'Images/Kruszywa/Żwir_2-8/1.jpg', 'Images/Kruszywa/Żwir_2-8/2.jpg'],
        calcValue: '1.7'
    },
    'zwir-816': {
        title: 'Żwir 8/16',
        description: 'Większa frakcja żwiru, odpowiednia do utwardzania powierzchni, budowy fundamentów i używana przy produkcji betonu.',
        images: ['Images/Kruszywa/zwir_8-16.jpg', 'Images/Kruszywa/Żwir_8-16/1.jpg', 'Images/Kruszywa/Żwir_8-16/2.jpg'],
        calcValue: '1.7'
    },
    'grys-28': {
        title: 'Grys 2/8',
        description: 'Drobnofrakcyjny grys stosowany jako podsypka pod kostkę brukową oraz jako dekoracja ogrodowa. Sprawdza się również w drenażach i konstrukcjach betonowych.',
        images: ['Images/Kruszywa/grys_2-8.jpg', 'Images/Kruszywa/Grys_2-8/1.jpg', 'Images/Kruszywa/Grys_2-8/2.jpg'],
        calcValue: '1.8'
    },
    'grys-811': {
        title: 'Grys 8/11',
        description: 'Średniej wielkości grys, idealny do utwardzania powierzchni, ale także jako element aranżacji terenów zielonych i architektury ogrodowej.',
        images: ['Images/Kruszywa/grys_8-11.jpg', 'Images/Kruszywa/Grys_8-11/1.jpg', 'Images/Kruszywa/Grys_8-11/2.jpg'],
        calcValue: '1.8'
    },
    'grys-1116': {
        title: 'Grys 11/16',
        description: 'Większa frakcja grysu o szerokim zastosowaniu w budownictwie i ogrodnictwie. Używana w drenażach, na podjazdach oraz w architekturze krajobrazu.',
        images: ['Images/Kruszywa/grys_11-16.jpg', 'Images/Kruszywa/Grys_11-16/1.jpg', 'Images/Kruszywa/Grys_11-16/2.jpg'],
        calcValue: '1.8'
    },
    'norwes-1622': {
        title: 'Kamień Norweski 16/22',
        description: 'Elegancki kamień o dużej trwałości, polecany do aranżacji ogrodów, ozdobnych powierzchni i wykończeń dekoracyjnych.',
        images: ['Images/Kruszywa/norwes_16-22.jpg', 'Images/Kruszywa/Norwes_16-22/1.jpg', 'Images/Kruszywa/Norwes_16-22/2.jpg'],
        calcValue: '1.8'
    },
    'norwes-1632': {
        title: 'Kamień Norweski 16/32',
        description: 'Grubsza frakcja kamienia norweskiego, wykorzystywana w ogrodnictwie, do dekoracji terenów zielonych, jako wypełnienie gabionów i w aranżacjach krajobrazowych.',
        images: ['Images/Kruszywa/norwes_16-32.jpg', 'Images/Kruszywa/Norwes_16-32/1.jpg', 'Images/Kruszywa/Norwes_16-32/2.jpg'],
        calcValue: '1.8'
    },

    'deliv-1': {
        title: 'Pickup Range',
        description: 'Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. ',
        images: ['Images/Kruszywa/norwes_16-32.jpg', 'Images/Kruszywa/Norwes_16-32/1.jpg', 'Images/Kruszywa/Norwes_16-32/2.jpg'],
        calcValue: null
    },
    'deliv-2': {
        title: 'Przyczepa "Naczepa"',
        description: 'Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. ',
        images: ['Images/Kruszywa/norwes_16-32.jpg', 'Images/Kruszywa/Norwes_16-32/1.jpg', 'Images/Kruszywa/Norwes_16-32/2.jpg'],
        calcValue: null
    },
    'deliv-3': {
        title: 'Wywrotka xd',
        description: 'Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. Opis Pickupa. ',
        images: ['Images/Kruszywa/norwes_16-32.jpg', 'Images/Kruszywa/Norwes_16-32/1.jpg', 'Images/Kruszywa/Norwes_16-32/2.jpg'],
        calcValue: null
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('service-modal');
    const items = document.querySelectorAll('.clickable-item');
    const calcBtn = document.getElementById('calc-link-btn');
    const select = document.getElementById('calc-type');

    items.forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            const data = serviceDetails[id];

            if (data) {
                document.getElementById('detail-title').innerText = data.title;
                document.getElementById('detail-description').innerText = data.description;
                document.getElementById('main-detail-img').src = data.images[0];

                const thumbContainer = document.getElementById('extra-thumbnails');
                thumbContainer.innerHTML = '';
                data.images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.onclick = () => document.getElementById('main-detail-img').src = src;
                    thumbContainer.appendChild(img);
                });

                // LOGIKA PRZYCISKU KALKULATORA
                if (data.calcValue) {
                    calcBtn.style.display = 'block';
                    // Przypisujemy akcję do przycisku
                    calcBtn.onclick = () => {
                        modal.style.display = 'none'; // Zamknij modal

                        // 1. Ustawienie wartości w kalkulatorze
                        const select = document.getElementById('calc-type');
                        select.value = data.calcValue;

                        // 2. Przewinięcie do sekcji kalkulatora
                        document.querySelector('.calculator-container').scrollIntoView({
                            behavior: 'smooth' });
                    };
                } else {
                    calcBtn.style.display = 'none'; // Ukryj dla usług transportu
                }

                modal.style.display = 'flex';
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close-card')) {
            modal.style.display = 'none';
        }
    });
});