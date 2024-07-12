document.addEventListener('DOMContentLoaded', () => {
    const ghosts = {
        "Espíritu": ["EMF", "Spirit Box", "Escritura fantasmal"],
        "Espectro": ["Huellas dactilares", "EMF", "Spirit Box"],
        "Ente": ["Huellas dactilares", "Escritura fantasmal", "Temperaturas heladas"],
        "Poltergeist": ["Huellas dactilares", "Spirit Box", "Escritura fantasmal"],
        "Banshee": ["Huellas dactilares", "Orbes espectrales", "Proyector DOTS"],
        "Jinn": ["EMF", "Huellas dactilares", "Temperaturas heladas"],
        "Pesadilla": ["Spirit Box", "Orbes espectrales", "Escritura fantasmal"],
        "Revenant": ["Orbes espectrales", "Escritura fantasmal", "Temperaturas heladas"],
        "Sombra": ["EMF", "Escritura fantasmal", "Temperaturas heladas"],
        "Demonio": ["Huellas dactilares", "Escritura fantasmal", "Temperaturas heladas"],
        "Yurei": ["Orbes espectrales", "Temperaturas heladas", "Proyector DOTS"],
        "Oni": ["EMF", "Temperaturas heladas", "Proyector DOTS"],
        "Yokai": ["Orbes espectrales", "Spirit Box", "Proyector DOTS"],
        "Hantu": ["Huellas dactilares", "Orbes espectrales", "Temperaturas heladas"],
        "Goryo": ["EMF", "Huellas dactilares", "Proyector DOTS"],
        "Myling": ["EMF", "Huellas dactilares", "Escritura fantasmal"],
        "Onryo": ["Orbes espectrales", "Spirit Box", "Temperaturas heladas"],
        "Gemelos": ["EMF", "Spirit Box", "Temperaturas heladas"],
        "Raiju": ["EMF", "Orbes espectrales", "Proyector DOTS"],
        "Obake": ["EMF", "Huellas dactilares", "Orbes espectrales"],
        "Mímico": ["Spirit Box", "Huellas dactilares", "Escritura fantasmal"],
        "Moroi": ["Spirit Box", "Escritura fantasmal", "Temperaturas heladas"],
        "Deogen": ["Spirit Box", "Escritura fantasmal", "Proyector DOTS"],
        "Thaye": ["Spirit Box", "Escritura fantasmal", "Orbes espectrales"]
    };

    const evidenceCheckboxes = document.querySelectorAll('.evidence');
    const filteredGhostsList = document.getElementById('filtered-ghosts');

    evidenceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterGhosts);
    });

    function filterGhosts() {
        const selectedEvidences = Array.from(evidenceCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        filteredGhostsList.innerHTML = '';

        for (const [ghost, evidences] of Object.entries(ghosts)) {
            if (selectedEvidences.every(evidence => evidences.includes(evidence))) {
                const li = document.createElement('li');
                li.textContent = ghost;
                filteredGhostsList.appendChild(li);
            }
        }
    }
});