
const searchCharacter=() =>{
    let character = document.getElementById('search-character').value
    fetch(`https://rickandmortyapi.com/api/character${character }`)
    .then(res => res.json())
    .then(data => displayCharacter(data.data))
}

const displayCharacter = characters => {
    const characterContainer = document.getElementById("character-container")
    characterContainer.innerHTML = ''
    characters.forEach(character => {
        console.log(character)
        console.log(character.id)
        const characterDiv = document.createElement("div")
        characterDiv.className = "single-result row align-items-center my-3 p-3"
        characterDiv.innerHTML = `
        
                    <div class="col-lg-2 text-center">
                        <img class src=${character.id} style="height:50px ;" alt=""/>
                    </div>
                    <div class="col-lg-4 text-center">
                        <h3 class="character-name">${character.name}</h3>
                        <p class="character-status">Album by <span>${character.status}</span></p>
                    </div>
                    <div class="col-lg-6 text-center">   
                        <speciesCahracter>
                            <source src=${character.species} type="">
                        </speciesCharacter>
                    </div>
                            `
        characterContainer.appendChild(charactergDiv)
    });
}

`


    }
