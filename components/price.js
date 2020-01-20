export default (data) => {
  const divElem = document.createElement('div');
  divElem.classList.add('margin-05');
  divElem.innerHTML = `
      <label for="price${data.category}">Precio Estimado ${data.category}</label>
      <input type="text" name="price${data.category}" value="${data.price}">`
  return divElem;
}