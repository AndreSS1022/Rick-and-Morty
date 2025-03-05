/* en javascript hay dos formas
 de declarar funciones

 1 //
function searchSong()
{

}*/

//2. moderna
const buscarPersonaje =() =>
    
{
     // se guardar el valor digitado por
     // el usuario en el html y se guardar
     // en la variable songName

    let characterName = document.getElementById
    ('search-character').value


    //se envia la variable songName al api
    // para consultar la informacion de la 
    // cancion o artista

    
    fetch(`https://rickandmortyapi.com/api/character
        ${characterName}`)

        .then(res => res.json())
        .then(data => displayRickMortyCharacters(data.data))

}


function displayRickMortyCharacters(characters) {
    const charactersList = document.getElementById('rickMortyCharacters');
    charactersList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos personajes
    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = `${character.name} - ${character.status} - ${character.species}`;
        charactersList.appendChild(li);
    });

songDiv.className = "single-result row align-items-center my-3 p-3"
songDiv.innerHTML = ` 

<div class="col-lg-2 text-center">
<img class src=${song.album.cover_medium}
 style="height:50px ;" alt=""/>
                    
</div>

<div class="col-lg-4 text-center">
 <h3 class="lyrics-name">${song.title}</h3>
</div>



`


    }
