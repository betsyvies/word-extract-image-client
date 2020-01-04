const divElement = (data) => {
  console.log(data)
  const divElem = document.createElement('div');
  divElem.classList.add('margin-1');
  divElem.innerHTML = `
      <div class="margin-05">
      <label for="priceLite">Precio Estimado ${data.category}</label>
      <input type="text" name="priceLite" value=${data.price}>
      </div>
      <div class="margin-05">
      <label for="timeLite">Tiempo Estimado de llegada ${data.category} (Minutos)</label>
      <input type="text" name="timeLite" value=${data.time}>
      </div>`
  return divElem;
}

const imgCabify = document.getElementById('imgFile');

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
    .then(getData)
    .catch(error => console.error('Error:', error))
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
});

const getData = (obj) => {
  const formElement = document.getElementById('root')
  formElement.innerHTML = '';
  obj.data.forEach(elem => {
    formElement.appendChild(divElement(elem));
  });
}
























/*import appForm from './container/appForm.js';

const initialState = {
  name: undefined,
  currentCategory: undefined,
  currentQuestion: 0,
  answers: {},
  categories,
};

export const getData = (obj) => {
  const divElement = document.getElementById('root')
  divElement.innerHTML = '';
  divElement.appendChild(appForm(obj));
}

getData(initialState) */

