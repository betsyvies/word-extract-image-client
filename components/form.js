export default (obj) => {
  const formElem = document.createElement('form');
  obj.data.forEach(elem => {
    formElem.appendChild(divElement(elem));
  });
}