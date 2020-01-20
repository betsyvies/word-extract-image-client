import image from '../components/image.js';
import form from '../components/form.js';
// import formDriver from '../components/formDriver.js'
import inputFile from '../components/inputFile.js'

export default (data) => {
  const divElem = document.createElement('div');
  divElem.appendChild(image(data.url));
  divElem.appendChild(form(data.data));
  divElem.appendChild(inputFile());
  return divElem;
}