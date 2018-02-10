let hasClass
let addClass
let removeClass

if (!document) {
  return
}

if ('classList' in document.documentElement) {
  hasClass = function (el, className) { return el.classList.contains(className) }
  addClass = function (el, className) { el.classList.add(className) }
  removeClass = function (el, className) { el.classList.remove(className) }
} else {
  hasClass = function (el, className) {
    return new RegExp('\\b'+ className+'\\b').test(el.className)
  }
  addClass = function (el, className) {
    if (!hasClass(el, className)) { el.className += ' ' + className }
  }
  removeClass = function (el, className) {
    el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '')
  }
}

export default {
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass
}
