// Sample product data (you can replace this with your actual product data)
const hal_data = [
  {
    imageSrc: 'stare/x.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 1',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/hjj.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 2',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w1.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w2.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w3.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 4',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w4.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 4',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w5.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 5',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w6.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 6',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    imageSrc: 'stare/w7.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 7',
    price: '85zł',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]
// Function to create product elements
function createProductElements(products, index) {
  const productSlider = document.getElementById('product-slider2')

  products.forEach((product) => {
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

    const description = document.createElement('p')
    description.textContent = product.description

    //wyświetlanie podglądu produktu
    productElement.addEventListener('click', () =>
      showProductDetails(product, index)
    )

    productElement.appendChild(productImage)
    productInfo.appendChild(productName)
    productInfo.appendChild(hr)
    productInfo.appendChild(price)
    //productInfo.appendChild(description)

    productElement.appendChild(productInfo)
    productSlider.appendChild(productElement)
  })

  // Po dodaniu wszystkich produktów, aktywuj Slick Slider
  $(document).ready(function () {
    $('#product-slider2').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      // autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1500, // Zmniejsz liczby dla szerokości ekranu 1024px
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1150, // Zmniejsz liczby dla szerokości ekranu 1024px
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Zmniejsz liczby dla szerokości ekranu 768px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480, // Zmniejsz liczby dla szerokości ekranu 480px
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
    const overlay = document.getElementById('product-details-overlay')
    const largeImage = document.getElementById('large-image')
    const productName = document.getElementById('product-name')
    const productPrice = document.getElementById('product-price')
    const productDescription = document.getElementById('product-description')
    const closeBtn = document.getElementById('close-btn')

    // Ustaw zawartość większego diva na podstawie klikniętego produktu
    largeImage.src = product.imageSrc
    largeImage.alt = product.alt
    productName.textContent = product.name
    productPrice.textContent = product.price
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

// Call the function with the product data
createProductElements(hal_data)
