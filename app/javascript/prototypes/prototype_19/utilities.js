function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function getFrame() {
  return document.getElementsByClassName('frame')[0]
}

function getContainerRect() {
  const firstContainerElement = document.getElementsByClassName(
    'second_container'
  )[0]
  const boundingRect = firstContainerElement.getBoundingClientRect
  return boundingRect
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

export { getRandomArbitrary, sample, getFrame, getContainerRect, shuffle }
