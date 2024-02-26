const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2639ec8a72msh7f27b9d7e3f94f3p1939eajsn693824c31c8c',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));