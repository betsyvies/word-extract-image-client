export default (data) => {
  const divElem = document.createElement('div');
  divElem.classList.add('margin-05');
  divElem.innerHTML = `
      <label for="time${data.category}">Tiempo Estimado de llegada ${data.category} (Minutos)</label>
      <input type="text" name="time${data.category}" value="${data.time}">`
  return divElem;
}