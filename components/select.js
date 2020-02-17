import option from './option.js';

export default (data) => {
  const selectElem = document.createElement('select');
  //selectElem.classList.add('margin-05');
  data.typeApp.forEach(elem => selectElem.appendChild(option(elem)));
  return selectElem;
}