function addClass(element, className) {
  element.classList.remove(className);
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

export default {
  addClass,
  removeClass
};
