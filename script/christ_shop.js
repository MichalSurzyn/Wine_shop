// Sample product data (you can replace this with your actual product data)
const ch_data = [
  {
    imageSrc: 'stare/x.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 1',
    price: '85zł',
    description:
      '🌟 Prezent Świąteczny, który Rozświetli Twój Nastrój! 🎁\nSzara torba z flicu z motywami świątecznymi – to nasza propozycja na oryginalny prezent, który sprawi radość każdemu, kto ceni wyjątkowe gadżety i dobre wino. Niech te Święta będą pełne stylu i smaku!',
  },
  {
    imageSrc: 'stare/hjj.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 2',
    price: '85zł',
    description:
      '🍷 Wino z Klasy, Torba z Elegancją!\nNasza torba to nie tylko praktyczny gadżet, ale też wyraz Twojego wyjątkowego stylu. Szarość, motywy świąteczne – to połączenie, które sprawi, że każda butelka wina stanie się jeszcze bardziej wyjątkowa. Idealna na firmową wigilię, przyjęcie czy jako prezent dla bliskiej osoby.',
  },
  {
    imageSrc: 'stare/w1.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '85zł',
    description:
      '🎅 Świąteczne Motywy, Klasyczny Szary – Uniwersalne Elegancja!\nDla tych, którzy szukają czegoś więcej niż zwykłej torby. Dodajemy nutkę świątecznej magii – bombka, czapka Mikołaja, czy może urocza chińska czapka? Wybór należy do Ciebie! Niech Twój prezent wybije się spośród innych.',
  },
  {
    imageSrc: 'stare/w2.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '85zł',
    description:
      '🎀 Dla Osób w Każdym Wieku– Bo Styl Nie Zna Granic!\nNasza torba to połączenie nowoczesnego designu z elegancją. Niech każda lampka na choince lśni nie tylko dla najmłodszych, ale też dla tych, którzy doceniają smak dojrzałego wina i wyjątkowe prezenty.',
  },
  {
    imageSrc: 'stare/w3.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 4',
    price: '85zł',
    description:
      '🌲 Podaruj Sobie i Innym Chwilę Elegancji!\nBo każdy zasługuje na chwilę elegancji i wyjątkowości. Niech to Święta będą pełne stylu, smaku i radości. Daj sobie i swoim bliskim prezent, który nie tylko będzie praktyczny, ale również wyjątkowy – tak jak Ty!',
  },
  {
    imageSrc: 'stare/w4.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 4',
    price: '85zł',
    description:
      '🍇 Wino z klasą, torba z charakterem. Sprawdź, jak elegancja może być prosta i przyjemna! 🌟',
  },
]
// Function to create product elements
function createProductElements(products, index) {
  const productSlider = document.getElementById('product-slider3')

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
    $('#product-slider3').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      // autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
createProductElements(ch_data)
