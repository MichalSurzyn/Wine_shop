// Sample product data (you can replace this with your actual product data)
const hal_data = [
  {
    imageSrc: 'products/t1.jpg',
    alt: 'Produkt 1',
    name: 'Torba Mikołaj',
    price: '24,99 PLN ',
    d_title: '🌟 Prezent Świąteczny, który Rozświetli Twój Nastrój! 🎁',
    description:
      'Szara torba z flicu z motywami świątecznymi – to nasza propozycja na oryginalny prezent, który sprawi radość każdemu, kto ceni wyjątkowe gadżety i dobre wino. Niech te Święta będą pełne stylu i smaku!',
  },
  {
    imageSrc: 'products/t2.jpg',
    alt: 'Produkt 2',
    name: 'Torba Choinka',
    price: '24,99 PLN ',
    d_title: '🍷 Wino z Klasy, Torba z Elegancją',
    description:
      'Nasza torba to nie tylko praktyczny gadżet, ale też wyraz Twojego wyjątkowego stylu. Szarość, motywy świąteczne – to połączenie, które sprawi, że każda butelka wina stanie się jeszcze bardziej wyjątkowa. Idealna na firmową wigilię, przyjęcie czy jako prezent dla bliskiej osoby.',
  },
  {
    imageSrc: 'products/t3.jpg',
    alt: 'Produkt 3',
    name: 'Torba Bombka',
    price: '24,99 PLN ',
    d_title: '🎅 Świąteczne Motywy, Klasyczny Szary – Uniwersalne Elegancja!',
    description:
      'Dla tych, którzy szukają czegoś więcej niż zwykłej torby. Dodajemy nutkę świątecznej magii – bombka, czapka Mikołaja, czy może urocza chińska czapka? Wybór należy do Ciebie! Niech Twój prezent wybije się spośród innych.',
  },
  {
    imageSrc: 'products/t4.jpg',
    alt: 'Produkt 4',
    name: 'Zestaw Toreb',
    price: '69,99 PLN ',
    d_title: '🎀 Dla Osób w Każdym Wieku– Bo Styl Nie Zna Granic!',
    description:
      'Nasza torba to połączenie nowoczesnego designu z elegancją. Niech każda lampka na choince lśni nie tylko dla najmłodszych, ale też dla tych, którzy doceniają smak dojrzałego wina i wyjątkowe prezenty.',
  },
  {
    imageSrc: 'products/t5.jpg',
    alt: 'Produkt 5',
    name: 'Zestaw Toreb',
    price: '69,99 PLN ',
    d_title: '🌲 Podaruj Sobie i Innym Chwilę Elegancji!',
    description:
      'Bo każdy zasługuje na chwilę elegancji i wyjątkowości. Niech to Święta będą pełne stylu, smaku i radości. Daj sobie i swoim bliskim prezent, który nie tylko będzie praktyczny, ale również wyjątkowy – tak jak Ty!',
  },
]

// Call the function with the product data
createProductElements(hal_data, 'product-slider2')
