const imgCabify = document.getElementById('imgCabify');

imgCabify.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader  = new FileReader();
  reader.addEventListener("load", function () {
    const data = {image: reader.result.slice(reader.result.indexOf(',') + 1)};

    fetch('http://localhost:5000/ocr', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(console.log)
    .catch(error => console.error('Error:', error))
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
});
