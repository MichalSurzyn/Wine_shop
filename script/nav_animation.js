const navbar = document.querySelector('.navbar')
const originalHeight = navbar.offsetHeight // Użyj offsetHeight do uzyskania prawidłowej wysokości nawigacji
const originalPaddingTop = parseInt(window.getComputedStyle(navbar).paddingTop)
const originalPaddingBottom = parseInt(
  window.getComputedStyle(navbar).paddingBottom
)
const targetHeight = 70 // Docelowa wysokość nawigacji
let startTimestamp
const duration = 500 // Czas trwania animacji w milisekundach
let scrollingUp = false

function animateNavbar(timestamp, startHeight, targetHeight) {
  if (!startTimestamp) startTimestamp = timestamp
  const progress = (timestamp - startTimestamp) / duration
  const newHeight = startHeight + (targetHeight - startHeight) * progress
  navbar.style.height = `${newHeight}px`

  if (progress < 1) {
    requestAnimationFrame((timestamp) =>
      animateNavbar(timestamp, startHeight, targetHeight)
    )
  } else {
    navbar.style.height = `${targetHeight}px`
  }
}

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY
  if (scrollY > 0 && !scrollingUp) {
    scrollingUp = true
    startTimestamp = null
    requestAnimationFrame((timestamp) =>
      animateNavbar(timestamp, navbar.offsetHeight, targetHeight)
    )
  } else if (scrollY === 0 && scrollingUp) {
    scrollingUp = false
    startTimestamp = null
    const newHeight = originalHeight - (originalHeight - targetHeight)
    navbar.style.height = `${newHeight}px`
    requestAnimationFrame((timestamp) =>
      animateNavbar(timestamp, navbar.offsetHeight, originalHeight)
    )
  }
})
