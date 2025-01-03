initialize()

/**
 *
 */
function initialize() {
  addCSSLink()
  addInfoIcon()
}

/**
 *
 */
function addInfoIcon() {
  items = document.querySelectorAll('div.Data_Item')
  items.forEach(function(item) {
    item.appendChild(createInfoIcon())
  })
}

/**
 * <span class='info-icon'>
 *   <img></img>
 * </span>
 * @return {Element}
 */
function createInfoIcon() {
  let span = document.createElement("span")
  span.setAttribute("class", "info-icon")
  let img = document.createElement("img")
  img.setAttribute("src", chrome.runtime.getURL("../images/circle-info-solid.svg"))
  span.appendChild(img)
  return span
}

/**
 * @return {Element}
 */
function addCSSLink() {
  let link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('href', chrome.runtime.getURL('../content.css'))
  document.head.append(link)
}
