//import createProductElements from './create_product'
const productsData = [
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
    imageSrc: 'products/m4.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Merry Christmas',
    price: '14,99 PLN ',
    d_title: '✨ Drewniany Majstersztyk na Wielki Powód!',
    description:
      'Nasz multikorek to dzieło sztuki wykonane z najwyższej jakości drewna. Wybierz motyw, który pasuje do okazji – czy to świąteczny na magiczną atmosferę, urodzinowy dla jubilata, dedykowany dla szczególnej osoby czy uniwersalny na co dzień.',
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
    imageSrc: 'products/m12.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek The Divine',
    price: '85zł',
    d_title: '🎀 Wybierz Wyjątkowe do Wyjątkowego!',
    description:
      'Bo chwila z winem zasługuje na wyjątkowy akcent. Wybierz nasz Wysokiej Klasy Multikorek, by uczynić każdą butelkę wina jeszcze bardziej niezapomnianą.',
  },
  {
    imageSrc: 'products/m15.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Halloween',
    price: '14,99 PLN ',
    description:
      'Od świątecznych choinek po urodzinowe torty, od dedykowanych napisów po uniwersalne wzory – wybór motywu na multikorek to kwestia Twojej wyobraźni. Stwórz niepowtarzalny zestaw, który przemówi do gustu każdego miłośnika wina',
  },
  {
    imageSrc: 'products/m18.jpg',
    alt: 'Produkt 1',
    name: 'Multikorek Halloween',
    price: '14,99 PLN ',
    d_title: '🌲 Drewno z Charakterem, Wino z Klasy!!',
    description:
      'Nasze multikorki to nie tylko gadżety – to wyznaczniki elegancji i stylu. Dla tych, którzy cenią sobie nie tylko smak wina, ale także atmosferę każdego spotkania przy lampce ulubionego trunku.',
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
createProductElements(productsData, 'product-slider')
