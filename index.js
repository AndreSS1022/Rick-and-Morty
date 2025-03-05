document.getElementById('fetchEpisode').addEventListener('click', fetchEpisodeDetails);

async function fetchEpisodeDetails() {
    const episodeId = document.getElementById('episodeId').value;
    const api = `https://rickandmortyapi.com/api/episode/${episodeId}`;
    
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Episodio no encontrado');
        }
        const data = await response.json();
        displayEpisodeDetails(data);
    } catch (error) {
        document.getElementById('episodeDetails').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayEpisodeDetails(episode) {
    const episodeDetails = document.getElementById('episodeDetails');
    episodeDetails.innerHTML = `
        <h2>${episode.name}</h2>
        <p><strong>Fecha de emisión:</strong> ${episode.air_date}</p>
        <p><strong>Temporada:</strong> ${episode.episode}</p>
    `;
}
