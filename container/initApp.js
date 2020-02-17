import appForm from './appForm.js';
import appFilter from './appFilter.js';

export const initApp = (obj) => {
  const mainElement = document.getElementById('root');
  mainElement.appendChild(appFilter(obj));
  mainElement.appendChild(appForm(obj));
  //mainElement.appendChild(appForm(obj.cabify));
  //mainElement.appendChild(appForm(obj.uber));
  //mainElement.appendChild(appForm(obj.satelital));
  //mainElement.appendChild(appForm(obj.inDriver));
};
