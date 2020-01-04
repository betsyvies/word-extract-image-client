export default (url) => {
  const imageElem =  document.createElement('img');
  imageElem.setAttribute('src', url);
  imageElem.classList.add('logo');
  return imageElem;
}