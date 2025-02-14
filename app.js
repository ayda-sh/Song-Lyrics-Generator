document.getElementById("qeneratebtn").addEventListener("click", async function (event) {  
    event.preventDefault();  

    const songInput = document.getElementById("song-input").value;  
    const artistInput = document.getElementById("artist-input").value;  
    const artistName = document.getElementById("artist");  
    const songTitle = document.getElementById("song-title");  
    const lyrics = document.getElementById("lyrics");  

    const url = `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`; 

    try {  
        const response = await fetch(url, {  
            method: "GET",  
        });  
        const data = await response.json();  

       if (data.lyrics) {  
           const verses = data.lyrics.split('\n'); 
           const portion = verses.slice(0, 100);  

           artistName.textContent = artistInput; 
           songTitle.textContent = songInput;  
           lyrics.innerHTML = portion.join('<br>');  
       } else {  
           lyrics.innerText = "Lyrics not found.";   
       }  
    } catch (error) {  
        // console.log(error); 
        lyrics.innerText = "Not found";   
    }  
});