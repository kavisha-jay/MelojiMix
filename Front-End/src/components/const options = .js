const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2639ec8a72msh7f27b9d7e3f94f3p1939eajsn693824c31c8c',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));