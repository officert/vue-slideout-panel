function addClass(element, className) {
  removeClass(element, className);

  element.className += ` ${className}`;
}

function removeClass(element, className) {
  const regex = new RegExp(`(?:^|\\s)${className}(?:\\s|$)`);
  element.className = element.className.replace(regex, '');
}

export default {
  addClass,
  removeClass
};
