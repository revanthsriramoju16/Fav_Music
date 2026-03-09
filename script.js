let songs = JSON.parse(localStorage.getItem('songs')) || [];

function addSong() {
  const songInput = document.getElementById('songInput');
  const songName = songInput.value.trim();

  if (songName === "") {
    alert("Please enter a song name!");
    return;
  }

  songs.push(songName);

  localStorage.setItem('songs', JSON.stringify(songs));

  songInput.value = "";
  displaySongs();
}

function displaySongs() {
  const songList = document.getElementById('songList');
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song;

    const delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => removeSong(index);

    li.appendChild(delBtn);
    songList.appendChild(li);
  });
}

function removeSong(index) {
  songs.splice(index, 1);
  localStorage.setItem('songs', JSON.stringify(songs));
  displaySongs();
}
function clearAllSongs() {
  if (confirm("Are you sure you want to delete all songs?")) {
    songs = [];
    localStorage.removeItem('songs'); 
    displaySongs();
  }
}


displaySongs();
