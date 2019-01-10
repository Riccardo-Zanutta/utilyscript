function $1(selector, context) {
  return (context || document).querySelector(selector)
}

export default $1
