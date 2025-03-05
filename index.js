/* en javascript hay dos formas
 de declarar funciones

 1 //
function searchSong()
{

}*/

//2. moderna
const searchSong =() =>
    
{
     // se guardar el valor digitado por
     // el usuario en el html y se guardar
     // en la variable songName

    let songName = document.getElementById
    ('search-field').value


    //se envia la variable songName al api
    // para consultar la informacion de la 
    // cancion o artista

    
    fetch(`https://api.lyrics.ovh/suggest/
        ${songName}`)

        .then(res => res.json())
        .then(data => displaySong(data.data))

}


const displaySong = songs => {
    // esta variable almacena un elemento 
    // html de tipo div 
    const songContainer = 
    document.getElementById("song-container")

    // concatena lineas de html 
    songContainer.innerHTML = ''

    songs.forEach(song => 
        {

        // trazar codigo 
        //    console.log(song)
        //    console.log(song.album.cover_medium)
    
        const songDiv = document.createElement("div")

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
