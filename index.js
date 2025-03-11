const searchCharacter = () => {
    let characterInput = document.getElementById('search-character').value;
    
    // Si el input es un número, buscaremos por ID
    if (!isNaN(characterInput) && characterInput.trim() !== '') {
        // Búsqueda por ID
        fetch(`https://rickandmortyapi.com/api/character/${characterInput}`)
            .then(res => res.json())
            .then(data => {
                // Si buscamos por ID, obtenemos un solo personaje, no un array
                displaySingleCharacter(data);
            })
            .catch(err => {
                console.error(err);
                displayError("No se encontró ningún personaje con ese ID");
            });
    } else {
        // Búsqueda por nombre
        fetch(`https://rickandmortyapi.com/api/character/?name=${characterInput}`)
            .then(res => res.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    displayCharacters(data.results);
                } else {
                    displayError("No se encontraron personajes con ese nombre");
                }
            })
            .catch(err => {
                console.error(err);
                displayError("Error al buscar personajes");
            });
    }
}

// Para mostrar un solo personaje (cuando buscamos por ID)
const displaySingleCharacter = (character) => {
    const characterContainer = document.getElementById("character-container");
    characterContainer.innerHTML = '';
    
    const characterDiv = document.createElement("div");
    characterDiv.className = "single-result row align-items-center my-3 p-3";
    characterDiv.innerHTML = `
        <div class="col-lg-2 text-center">
            <img src="${character.image}" style="height:150px;" alt="${character.name}"/>
        </div>
        <div class="col-lg-4 text-center">
            <h3 class="character-name">${character.name}</h3>
            <p class="character-status">Status: <span>${character.status}</span></p>
        </div>
        <div class="col-lg-6 text-center">   
            <div>Species: <span>${character.species}</span></div>
            <div>Gender: <span>${character.gender}</span></div>
            <div>Origin: <span>${character.origin.name}</span></div>
            <div>Location: <span>${character.location.name}</span></div>
        </div>
    `;
    characterContainer.appendChild(characterDiv);
}

// Para mostrar múltiples personajes (cuando buscamos por nombre)
const displayCharacters = (characters) => {
    const characterContainer = document.getElementById("character-container");
    characterContainer.innerHTML = '';
    
    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.className = "single-result row align-items-center my-3 p-3";
        characterDiv.innerHTML = `
            <div class="col-lg-2 text-center">
                <img src="${character.image}" style="height:100px;" alt="${character.name}"/>
            </div>
            <div class="col-lg-4 text-center">
                <h3 class="character-name">${character.name}</h3>
                <p class="character-status">Status: <span>${character.status}</span></p>
            </div>
            <div class="col-lg-6 text-center">   
                <div>Species: <span>${character.species}</span></div>
                <div>Gender: <span>${character.gender}</span></div>
            </div>
        `;
        characterContainer.appendChild(characterDiv);
    });
}

// Para mostrar mensajes de error
const displayError = (message) => {
    const characterContainer = document.getElementById("character-container");
    characterContainer.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            ${message}
        </div>
    `;
}

// Permitir búsqueda al presionar Enter
document.getElementById('search-character').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchCharacter();
    }
});
