const imgCabify = document.getElementById('imgCabify');
imgCabify.addEventListener('change', (event) => {
  //console.log(URL.createObjectURL(event.target.files[0]))
  console.log(event.target.files[0])

    /*const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);*/
})