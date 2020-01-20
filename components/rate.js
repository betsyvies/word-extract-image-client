export default (data) => {
  const divElem = document.createElement('div');
  divElem.classList.add('margin-1');
  divElem.innerHTML = `
      <label for="rate${data.category}">Monto Tarifa Alta Demanda (0 en caso no hubiese)</label>
      <input type="text" name="rate${data.category}" value="">`
  return divElem;
}