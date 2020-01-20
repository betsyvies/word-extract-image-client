import discountElem from './discount.js';
import rateElem from './rate.js';
import { priceAndTimeElement } from './priceAndTime.js';

export default (obj) => {
  const formElement = document.createElement('form');
  formElement.innerHTML = '';
  return addElem(formElement, obj);
}

export const addElem = (formElement, obj) => {
  obj.forEach(elem => {
    formElement.appendChild(priceAndTimeElement(elem));
  });
  formElement.appendChild(discountElem(obj))
  if(obj[0].category === 'Easy Economy' || obj[0].category === 'Comfort' ) {
    formElement.appendChild(rateElem(obj))
  }
  return formElement;
}