// Sample product data (you can replace this with your actual product data)
const ch_data = [
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
    imageSrc: 'products/m2.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Merry Christmas',
    price: '14,99 PLN ',
    d_title: '🍷 Witaj w Świecie Wyjątkowej Elegancji i Smaku! 🌟',
    description:
      '\nRozpocznij swoją winną podróż z naszym Wysokiej Klasy Multikorkiem wykonanym z najwyższej jakości drewna. To nie jest zwykły korek – to wyjątkowy gadżet, który wzbogaci każde spotkanie z winem. 🎁',
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
    imageSrc: 'products/m4.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Merry Christmas',
    price: '14,99 PLN ',
    d_title: '✨ Drewniany Majstersztyk na Wielki Powód!',
    description:
      'Nasz multikorek to dzieło sztuki wykonane z najwyższej jakości drewna. Wybierz motyw, który pasuje do okazji – czy to świąteczny na magiczną atmosferę, urodzinowy dla jubilata, dedykowany dla szczególnej osoby czy uniwersalny na co dzień.',
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
    price: '24,99 PLN ',
    d_title: '🎀 Dla Osób w Każdym Wieku– Bo Styl Nie Zna Granic!',
    description:
      'Nasza torba to połączenie nowoczesnego designu z elegancją. Niech każda lampka na choince lśni nie tylko dla najmłodszych, ale też dla tych, którzy doceniają smak dojrzałego wina i wyjątkowe prezenty.',
  },
  {
    imageSrc: 'products/m5.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Santa Clous',
    price: '14,99 PLN ',
    d_title: '🎉 Prezent Solo czy w Zestawie – Zawsze Wyjątkowy!',
    description:
      'Multikorek to nie tylko sam w sobie wspaniały prezent, ale również idealny dodatek do zestawu z winem, torbą czy tubą. Niech Twoje wino zasługuje na towarzystwo, które podkreśli jego wyjątkowy smak.',
  },
  {
    imageSrc: 'products/t5.jpg',
    alt: 'Produkt 5',
    name: 'Zestaw Toreb',
    price: '24,99 PLN ',
    d_title: '🌲 Podaruj Sobie i Innym Chwilę Elegancji!',
    description:
      'Bo każdy zasługuje na chwilę elegancji i wyjątkowości. Niech to Święta będą pełne stylu, smaku i radości. Daj sobie i swoim bliskim prezent, który nie tylko będzie praktyczny, ale również wyjątkowy – tak jak Ty!',
  },
  {
    imageSrc: 'products/m19.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Jemioła',
    price: '14,99 PLN ',
    d_title: '🎉 Prezent Solo czy w Zestawie – Zawsze Wyjątkowy!',
    description:
      'Multikorek to nie tylko sam w sobie wspaniały prezent, ale również idealny dodatek do zestawu z winem, torbą czy tubą. Niech Twoje wino zasługuje na towarzystwo, które podkreśli jego wyjątkowy smak.',
  },
]
// Call the function with the product data
createProductElements(ch_data, 'product-slider3')
