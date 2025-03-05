document.getElementById('fetchRickMorty').addEventListener('click', fetchRickMortyCharacters);

async function fetchRickMortyCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        displayRickMortyCharacters(data.results);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayRickMortyCharacters(characters) {
    const charactersList = document.getElementById('rickMortyCharacters');
    charactersList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos personajes
    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = `${character.name} - ${character.status} - ${character.species}`;
        charactersList.appendChild(li);
    });
}
