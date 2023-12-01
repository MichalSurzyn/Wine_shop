// Function to create product elements
function createProductElements(products, section) {
  const productSlider = document.getElementById(section)

  products.forEach((product, index) => {
    const productElement = document.createElement('div')
    productElement.className = 'product'

    const productImage = document.createElement('div')
    productImage.className = 'product-image'
    const image = document.createElement('img')
    image.src = product.imageSrc
    image.alt = product.alt
    productImage.appendChild(image)

    const productInfo = document.createElement('div')
    productInfo.className = 'product-info'

    const productName = document.createElement('h3')
    productName.textContent = product.name

    const hr = document.createElement('hr')

    const price = document.createElement('span')
    price.textContent = product.price

    //wyświetlanie podglądu produktu
    productElement.addEventListener('click', () =>
      showProductDetails(product, index)
    )

    productElement.appendChild(productImage)
    productInfo.appendChild(productName)
    productInfo.appendChild(hr)
    productInfo.appendChild(price)

    productElement.appendChild(productInfo)
    productSlider.appendChild(productElement)
  })

  // Po dodaniu wszystkich produktów, aktywuj Slick Slider
  $(document).ready(function () {
    $('#' + section).slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: false,
      speed: 1200,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })

  // Funkcja do pokazywania szczegółów produktu
  function showProductDetails(product, index) {
    console.log(index)
    const overlay = document.getElementById('product-details-overlay')
    const largeImage = document.getElementById('large-image')
    const productName = document.getElementById('product-name')
    const productPrice = document.getElementById('product-price')
    const productDescription = document.getElementById('product-description')
    const d_title = document.getElementById('d_title')
    const closeBtn = document.getElementById('close-btn')

    // Ustaw zawartość większego diva na podstawie klikniętego produktu
    largeImage.src = product.imageSrc
    largeImage.alt = product.alt
    productName.textContent = product.name
    productPrice.textContent = product.price
    d_title.textContent = product.d_title
    productDescription.textContent = product.description

    // Pokaż overlay
    overlay.style.display = 'flex'

    // Dodaj obsługę zamknięcia po kliknięciu na przycisk zamknij
    closeBtn.addEventListener('click', closeProductDetails)

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        closeProductDetails()
      }
    })
    // Pokaż overlay z opóźnieniem
    setTimeout(() => {
      overlay.style.opacity = 1
    }, 10)

    function closeProductDetails() {
      const overlay = document.getElementById('product-details-overlay')
      // Ukryj overlay z opóźnieniem
      overlay.style.opacity = 0

      setTimeout(() => {
        overlay.style.display = 'none'
        // Usuń obsługę zamknięcia, aby uniknąć wielokrotnego dodawania
        closeBtn.removeEventListener('click', closeProductDetails)
        overlay.removeEventListener('click', closeProductDetails)
      }, 300) // Odczekaj 300ms (czas transition) przed ukryciem
    }
  }
}
