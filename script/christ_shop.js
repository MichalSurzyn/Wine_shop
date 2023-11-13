// Sample product data (you can replace this with your actual product data)
const ch_data = [
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 1',
    price: '85zł',
    description: 'Opis produktu 1.',
  },
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 2',
    price: '$XX.XX',
    description: 'Opis produktu 2.',
  },
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '$XX.XX',
    description: 'Opis produktu 3.',
  },
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '$XX.XX',
    description: 'Opis produktu 3.',
  },
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '$XX.XX',
    description: 'Opis produktu 3.',
  },
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '$XX.XX',
    description: 'Opis produktu 3.',
  },
  {
    imageSrc: 'stare/aa.jpg',
    alt: 'Produkt 1',
    name: 'Nazwa Produktu 3',
    price: '$XX.XX',
    description: 'Opis produktu 3.',
  },
  // Add more product objects as needed
]
// Function to create product elements
function createProductElements(products) {
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
      autoplay: true,
      autoplaySpeed: 5000,
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
}

// Call the function with the product data
createProductElements(ch_data)
