export default (obj) => {
  const selectElem = document.createElement('option');
  selectElem.setAttribute('value', obj.value);
  selectElem.textContent = obj.app;
  return selectElem;
}