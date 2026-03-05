// Load saved songs from local storage when the page opens
let songs = JSON.parse(localStorage.getItem('songs')) || [];

function addSong() {
  const songInput = document.getElementById('songInput');
  const songName = songInput.value.trim();

  if (songName === "") {
    alert("Please enter a song name!");
    return;
  }

  // Add song to list
  songs.push(songName);

  // Save updated list to local storage
  localStorage.setItem('songs', JSON.stringify(songs));

  // Clear input box and refresh song list
  songInput.value = "";
  displaySongs();
}

function displaySongs() {
  const songList = document.getElementById('songList');
  songList.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song;

    // ❌ Add a remove button for each song
    const delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.onclick = () => removeSong(index);

    li.appendChild(delBtn);
    songList.appendChild(li);
  });
}

// 🗑️ Function to remove a song
function removeSong(index) {
  songs.splice(index, 1);
  localStorage.setItem('songs', JSON.stringify(songs));
  displaySongs();
}
function clearAllSongs() {
  if (confirm("Are you sure you want to delete all songs?")) {
    songs = [];
    localStorage.removeItem('songs'); // clear from storage
    displaySongs(); // refresh
  }
}


// Display songs when page loads
displaySongs();
