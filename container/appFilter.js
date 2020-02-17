import select from '../components/select.js';
import inputFile from '../components/inputFile.js';
import btnSend from '../components/btnSend.js';

export default (data) => {
  const divElem = document.createElement('div');
  divElem.appendChild(select(data));
  divElem.appendChild(inputFile(data));
  divElem.appendChild(btnSend(data));
  return divElem;
}