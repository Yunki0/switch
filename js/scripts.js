window.onload = function() {
     const loader = document.getElementById('loader');
    
    // Ajoute un délai de 2 secondes avant de masquer l'overlay de chargement
     setTimeout(function() {
         loader.style.display = 'none';
     },800); // 800 millisecondes = 0.8 secondes
};

