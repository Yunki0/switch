// Fonction pour gérer le défilement doux
function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    targetSection.scrollIntoView({
        behavior: 'smooth' // Active le défilement doux
    });
}

// Ajoutez un écouteur d'événements pour chaque lien de la navbar
document.querySelectorAll('.navbar-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        const targetId = this.getAttribute('href'); // Récupère l'ID de la section cible
        smoothScroll(targetId); // Appelle la fonction de défilement doux
    });
});

// Écouteur d'événements pour le scroll
let lastScrollTop = 0; // Variable pour stocker la dernière position de défilement

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Empêche le défilement par défaut

    const delta = Math.sign(event.deltaY); // deltaY est positif lorsque l'on fait défiler vers le bas
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight; // Vérifie si le haut de la section est visible
    });

    // Si on défile vers le bas
    if (delta > 0 && currentSectionIndex < sections.length - 1) {
        smoothScroll(`#${sections[currentSectionIndex + 1].id}`);
    }
    // Si on défile vers le haut
    else if (delta < 0 && currentSectionIndex > 0) {
        smoothScroll(`#${sections[currentSectionIndex - 1].id}`);
    }
}, { passive: false });