// Sample product data (you can replace this with your actual product data)
const productsData = [
  {
    imageSrc: 'stare/w5.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 5',
    price: '85zł',
    description:
      '🍷 Witaj w Świecie Wyjątkowego Elegancji i Smaku! 🌟\nRozpocznij swoją winną podróż z naszym Wysokiej Klasy Multikorkiem wykonanym z najwyższej jakości drewna. To nie jest zwykły korek – to wyjątkowy gadżet, który wzbogaci każde spotkanie z winem. 🎁',
  },
  {
    imageSrc: 'stare/w6.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 6',
    price: '85zł',
    description:
      '✨ Drewniany Majstersztyk na Wielki Powód!\nNasz multikorek to dzieło sztuki wykonane z najwyższej jakości drewna. Wybierz motyw, który pasuje do okazji – czy to świąteczny na magiczną atmosferę, urodzinowy dla jubilata, dedykowany dla szczególnej osoby czy uniwersalny na co dzień.',
  },
  {
    imageSrc: 'stare/w7.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 7',
    price: '85zł',
    description:
      '🎉 Prezent Solo czy w Zestawie – Zawsze Wyjątkowy!\nMultikorek to nie tylko sam w sobie wspaniały prezent, ale również idealny dodatek do zestawu z winem, torbą czy tubą. Niech Twoje wino zasługuje na towarzystwo, które podkreśli jego wyjątkowy smak.',
  },
  {
    imageSrc: 'stare/x.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 1',
    price: '85zł',
    description:
      '🌈 Różnorodność Motywów – Dla Każdej Okazji!\nOd świątecznych choinek po urodzinowe torty, od dedykowanych napisów po uniwersalne wzory – wybór motywu na multikorek to kwestia Twojej wyobraźni. Stwórz niepowtarzalny zestaw, który przemówi do gustu każdego miłośnika wina.',
  },
  {
    imageSrc: 'stare/hjj.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 2',
    price: '85zł',
    description:
      '🌲 Drewno z Charakterem, Wino z Klasy!\nNasze multikorki to nie tylko gadżety – to wyznaczniki elegancji i stylu. Dla tych, którzy cenią sobie nie tylko smak wina, ale także atmosferę każdego spotkania przy lampce ulubionego trunku.',
  },
  {
    imageSrc: 'stare/w1.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '85zł',
    description:
      '🎀 Wybierz Wyjątkowe do Wyjątkowego!\nBo chwila z winem zasługuje na wyjątkowy akcent. Wybierz nasz Wysokiej Klasy Multikorek, by uczynić każdą butelkę wina jeszcze bardziej niezapomnianą.',
  },
  {
    imageSrc: 'stare/w2.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '85zł',
    description:
      '🛍️ Odkryj Elegancję w Detalu – Zobacz Nasze Multikorki Już Teraz!',
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
function createProductElements(products) {
  const productSlider = document.getElementById('product-slider')

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
    $('#product-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
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
createProductElements(productsData)
