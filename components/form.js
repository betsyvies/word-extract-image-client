export default (data) => {
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