export default (data) => {
  const divElem = document.createElement('div');
  divElem.classList.add('margin-1');
  divElem.innerHTML = `
      <label for="discount${data.category}">Descuento (En caso hubiese)</label>
      <input type="text" name="discount${data.category}" value="">`
  return divElem;
}