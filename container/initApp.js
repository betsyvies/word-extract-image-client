import appForm from './appForm.js';

export const initApp = (obj) => {
  const mainElement = document.getElementById('root')
  mainElement.appendChild(appForm(obj.beat));
  mainElement.appendChild(appForm(obj.cabify));
  mainElement.appendChild(appForm(obj.uber));
  mainElement.appendChild(appForm(obj.satelital));
  //mainElement.appendChild(appForm(obj.inDriver));
};
