function $(selector, context) {
  return (context || document).querySelectorAll(selector)
}

export default $
