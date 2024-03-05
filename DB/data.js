const {Food, Accessory, HygieneAndVitamins} = require('./schema');

async function addFoods() {
  const foods = [
    {
      name: 'Hill’s Science Plan Canine Puppy Large с пилешко - 1.5kg',
      description: 'Пълноценна храна за подрастващи кученца от едри и гиганстски породи (над 25кг) на възраст от отбиването до 18 месеца; за бременни и кърмещи кучета.',
      petType: 'dog',
      price: 45.89,
      image: '../DB/photos/food1.png',
    },
    {
      name: 'Hill’s Science Plan Canine Puppy Medium с пилешко - 1.5kg',
      description: 'За подрастващи кучета от средните породи до 25 кг., от отбиването до 1 г. Бременни и кърмещи кучета.',
      petType: 'dog',
      price: 54.99,
      image: '../DB/photos/food2.png',
    },
    {
      name: 'Hill’s Science Plan Adult Medium с риба тон & ориз - 1.5kg',
      description: 'За кучета от средни породи до 25 кг с умерени енергийни нужди, от 1 до 7 години. Приготвена от висококачествени, лесносмилаеми съставки.',
      petType: 'dog',
      price: 52.49,
      image: '../DB/photos/food3.png',
    },
    {
      name: 'Hill’s Science Plan Small&Mini Adult с агнешко и ориз - 1.5kg',
      description: 'Пълноценна суха храна за дребни и миниатюрни породи кучета в зряла възраст 1-6 години.',
      petType: 'dog',
      price: 47.99,
      image: '../DB/photos/food4.png',
    },
    {
      name: 'Hill’s Science Plan Small&Mini Puppy с пилешко - 1.5kg',
      description: 'Пълноценна суха храна за дребни и миниатюрни породи  кучета от отбиване до 1 година. За бременни и кърмещи кучета.',
      petType: 'dog',
      price: 34.99,
      image: '../DB/photos/food5.png',
    },
    {
      name: 'Hill’s Science Plan Feline Young Adult Sterilised Duck - 1.5kg',
      description: 'Пълноценна суха храна за млади кастрирани котки от 6 месеца до 6 години, с патешко.',
      petType: 'cat',
      price: 42.49,
      image: '../DB/photos/food6.jpg',
    },
    {
      name: 'Hill’s Science Plan Adult Light Chicken - 1.5kg',
      description: 'Пълноценна суха храна за котки над 1 година за постигане и поддържане на идеално телесно тегло , с пилешко.',
      petType: 'cat',
      price: 45.99,
      image: '../DB/photos/food7.jpg',
    },
    {
      name: 'Hill’s Science Plan Kitten Perfect Digestion - 1.5kg',
      description: 'Пълноценна суха храна за отлично храносмилане за котенца до 1 година, с пилешко и кафяв ориз.',
      petType: 'cat',
      price: 31.99,
      image: '../DB/photos/food8.jpg',
    },
  ];

  await Food.insertMany(foods);
}

async function addAccessories() {
  const accessories = [
    {
      name: 'Ferplast Повод Daytona',
      description: 'С много мека дръжка за максимален комфорт, Daytona е идеален повод за вашето куче. Устойчив, направен от найлон.',
      accessoryType: 'leashes',
      price: 13.92,
      image: '../DB/photos/leashes1.jpg',
    },
    {
      name: 'Повод за куче Ferplast Club G Colours',
      description: 'Повод за кучета, изработен от здрав найлон, оборудван с приспособление за закачане, за да може лесно да се закачи на нашийника на Вашето куче.',
      accessoryType: 'leashes',
      price: 11.59,
      image: '../DB/photos/leashes2.jpg',
    },
    {
      name: 'Купа за вода или храна - NEW SELECTA',
      description: 'Купа за вода или храна от неръждаема стомана NEW SELECTA, 950ml. 15.5 см. червен цвят.',
      accessoryType: 'bowls',
      price: 16.49,
      image: '../DB/photos/bowl1.jpg',
    },
    {
      name: 'КУПА BELLA BOWLS',
      description: 'Купички от високо качествена стомана и пластмаса, покрита с нехлъзгаща се гума. Размери:  Ø 14 cm. /450 ml.',
      accessoryType: 'bowls',
      price: 12.28,
      image: '../DB/photos/bowl2.jpg',
    },
    {
      name: 'Метални купи KERBL, неръждаеми',
      description: 'Метални купи с размери: 2x200мл. и с гумен ръб против хлъзгане - подходяща за почистване в съдомиялна машина',
      accessoryType: 'bowls',
      price: 8.99,
      image: '../DB/photos/bowl3.jpg',
    },
    {
      name: 'Автоматичен повод за кучета до 20кг',
      description: 'Три различни функции: свободно движение, моментно блокиране и постоянно блокиране.',
      accessoryType: 'leashes',
      price: 26.49,
      image: '../DB/photos/leashes3.jpg',
    },
    {
      name: 'Ferplast Party – пластмасова купа с две отделения',
      description: 'Имат неплъзгащ се гумен ръб за максимална стабилност. Подходящи за кучета и котки.',
      accessoryType: 'bowls',
      price: 6.55,
      image: '../DB/photos/bowl4.jpg',
    },
    {
      name: 'Кожен повод "My Lord',
      description: 'Супер мека, но издръжлива изкуствена кожа. За кучета от средни и големи породи.',
      accessoryType: 'leashes',
      price: 17.49,
      image: '../DB/photos/leashes4.jpg',
    },
  ];

  await Accessory.insertMany(accessories);
}

async function addHygieneAndVitamins() {
  const hygieneAndVitamins = [
    {
      name: 'Хранителна добавка за кучета Pet Phos Croissance Ca/P=1.3, 100 таблетки.',
      description: 'Съдържа витамини и минерали за кученца в растеж; кърмещи или бременни женски кучета и кучета в активна възраст, хранени с готова гранулирана храна или такава в консерви.',
      itemType: 'vitamins',
      price: 21.29,
      image: '../DB/photos/vitamins1.jpg',
    },
    {
      name: 'Успокояващи таблетки за кучета и котки',
      description: 'Стресът е естествено леко успокояващ препарат, който съдържа триптофан, жълт кантарион, и таурин.',
      itemType: 'vitamins',
      price: 9.99,
      image: '../DB/photos/vitamins2.jpg',
    },
    {
      name: 'Beaphar Shampoo - шампоан за порчета и плъхове 250 мл.',
      description: 'Нежен шампоан за порчета и плъхчета със свеж мирис на бор, специално разработен за измие замърсяването и силната миризам на плъхчета и домано порче.',
      itemType: 'cosmetics',
      price: 22.49,
      image: '../DB/photos/cosmetics1.jpg',
    },
    {
      name: 'M-Pets Мокри кърпички 100% бамбук',
      description: 'Биоразградими и компостируеми (органични) мокри кърпички, помогат за успокояване на раздразнена кожа, премахват нежелани миризми, мръсотия и пърхот. ',
      itemType: 'cosmetics',
      price: 5.75,
      image: '../DB/photos/cosmetics2.jpg',
    },
    {
      name: 'DEODO ODOUR CONTROL GREEN TEA',
      description: 'Дезодорант на прах за котешка тоалетна с аромат на зелен чай. Нeутрализира неприятните миризми. Удължава ефекта от смяната на котешката тоалетна.',
      itemType: 'cosmetics',
      price: 19.99,
      image: '../DB/photos/cosmetics3.jpg',
    },
    {
      name: 'Препарат за почистване на уши',
      description: 'Почистващо средство за уши, специално разработено за почистване на ушния канал, особено при кучета, котки и зайци, страдащи от повтарящ се външен отит',
      itemType: 'cosmetics',
      price: 3.49,
      image: '../DB/photos/cosmetics4.jpg',
    },
    {
      name: 'Комплект четка и паста за зъби',
      description: 'За силни и здрави зъби, отстранява зъбната плака, предотвратява образуването на зъбен камък с приятен за кучето вкус',
      itemType: 'cosmetics',
      price: 20.75,
      image: '../DB/photos/cosmetics5.jpg',
    },
    {
      name: 'Противопаразитни капки за птици 50 мл.',
      description: 'Голяма, икономична опаковка за обезпаразитяване на много на брой птици. С капкомер за удобна употреба.',
      itemType: 'vitamins',
      price: 35.99,
      image: '../DB/photos/vitamins3.jpg',
    },
  ];

  await HygieneAndVitamins.insertMany(hygieneAndVitamins);
}

module.exports = {addFoods, addAccessories, addHygieneAndVitamins };