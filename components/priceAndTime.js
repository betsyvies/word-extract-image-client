import priceElem from './price.js';
import timeElem from './time.js';

export const priceAndTimeElement = (data) => {
  const divElem = document.createElement('div');
  divElem.classList.add('margin-1');
  if (verifyKeysAddNodes(data, 'price')) {
    divElem.appendChild(priceElem(data))
  }
  if (verifyKeysAddNodes(data, 'time')) {
    divElem.appendChild(timeElem(data))
  }
  return divElem;
}

const verifyKeysAddNodes = (data, key) => (
  data[key] !== undefined ? true : false
)