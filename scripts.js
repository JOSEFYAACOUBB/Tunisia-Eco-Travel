// script.js
document.addEventListener('DOMContentLoaded', function() {
    const gouvernorats = {
        tunis: {
            name: "Tunis",
            image: "images/gouvernorats/tunis.jpg",
            activities: ["Visite de la Médina", "Balade à Carthage"],
            transport: ["Voiture Électrique", "Vélo"],
            hotels: [
                { name: "Hôtel Eco", image: "images/hotels/tunis1.jpg" }
            ]
        }
        // Ajoutez d'autres gouvernorats...
    };

    const gouvernoratGrid = document.querySelector('.gouvernorat-grid');
    
    // Remplir dynamiquement les cartes
    for (const [key, value] of Object.entries(gouvernorats)) {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 gouvernorat-card" data-gouvernorat="${key}">
                    <img src="${value.image}" class="card-img-top">
                    <div class="card-body">
                        <h3>${value.name}</h3>
                    </div>
                </div>
            </div>
        `;
        gouvernoratGrid.innerHTML += card;
    }

    // Gestion des clics
    gouvernoratGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.gouvernorat-card');
        if (card) {
            const key = card.dataset.gouvernorat;
            console.log("Gouvernorat sélectionné :", gouvernorats[key].name);
            // Afficher les détails ici...
        }
    });
});