import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";

export const mim = {
  id: "mim",
  title: "Hotel MiM",
  cat: "hospitality",
  type: "Hospitality",
  rooms: [
    {
      title: "Doble room for single Use, incl breakfast",
      units: 0,
      occupancy: 1,
      nights: 3,
      unitcost: 139,
    },
    {
      title: "Double room for twin use, incl breakfast",
      units: 25,
      occupancy: 2,
      nights: 3,
      unitcost: 149,
    },
    {
      cat: "citytax",
      title: "city tax, per night per person, incl VAT",
      unitcost: 1,
    },
  ],
};

export const text = {
  variant: "h6",
  paras: [
    `  This lovely hotel is in Sitges. Nestled within 800 metres from the town centre, the establishment allows easy access to all this destination has to offer. The nearest beach is within 50 metres from the property. The premises count with 77 welcoming bedrooms. Common areas are suitable for wheelchair-disabled people. This is not a pet-friendly property.`,

    ` The <strong>Hotel Mim Sitges </strong> is located in the Catalan town of Sitges, in the heart of the city centre and less than 100 metres from the promenade, so it is very close to the beach.  Barcelona-El Prat Airport is about 27 kilometres away and can be reached in about 22 minutes.`,

    ` This accommodation has a total of 77 rooms, 56 of which are superior rooms, 15 deluxe rooms, 5 junior suites and one royal suite. They are spacious rooms ranging in size from 23 to 67 m2 and are luxuriously furnished and comfortably equipped. The rooms have a minibar, two telephones, hairdryer, free Wi-Fi, amenities with natural products, at least 32-inch television, soundproof windows for a better rest, wooden floors, independent air conditioning and heating, safe, desk and wake-up service. Each room es decorated with a different style`,

    ` <strong>A sustainable hotel certified by LEED Platinum</strong> The Hotel MiM Sitges was constructed in a building that is both sustainable and environmentally-friendly. Not in vain was 80% of the material used for the building's construction recycled or recyclable, while omitting the use of PVC, polymers, or petroleum products as well. The façade is made almost entirely of glass covered with seven layers of high-thermal capacity plates, a material which maintains the temperature without wasting more energy and also prevents noise pollution. In addition, all of the hotel windows have a high light factor so that ultraviolet rays cannot enter while obtaining the same degree of natural light and without darkening the glass. Regarding the efficient use of water, showers throughout the building have a system which, by taking in air and water at the same time, consumes less water (a maximum of nine litres per minute) while giving the guest the same sensation of comfort. The hotel also has tanks that collect the waste water from every shower which is then filtered, cleaned, treated, and used in the toilets and for watering all of the plants. In terms of energy, the hotel has lowconsumption LED lights, solar panels on the terrace that heat the water for all of the showers in the hotel as well as the spa, and windmills - also on the terrace - that generate enough energy to illuminate all of the common areas of the hotel. The hotel's ventilation system, apart from supplying air conditioning or heating using a VRV (variable refrigerant volume) system, also purifies the air. This system neutralises polluting emissions such as pollen and other allergens. Additionally, the Hotel MiM Sitges has bicycle parking available for employees. In the parking area are two charging stations for electric vehicles as well as two designed specifically for Tesla vehicles. All of these measures have earned the hotel the LEED certification (acronym for Leadership in Energy and Environmental Design). This is a certification system for sustainable buildings developed by the US Green Building Council. Initially implemented in 1993, there are currently more than 30 countries with certified buildings. Among these is the Hotel MiM Sitges, which, four years ago, was the first hotel in Europe to receive the certification, in addition to its highest level, Leed Platinum`,
   
  ],
};

export const leftIconsText = [
  "Sitges",
  "Bar & Restaurant",
  "77 rooms",
  "High Speed, available",
];

export const rightIconsText = [
  "1x outdoor pool",
  "checkin/out 3pm / 12pm",
  "4 x meeting rooms",
  "Wheelchair accessible",
];

export const photos = [
  {
    src: hotel1,
    thumbnail: hotel1,
    thumbnailWidth: 271,
    thumbnailHeight: 180,
    caption: "Façade of the Hotel",
    tags: [{ value: "Façade " }],
  },
  {
    src: hotel2,
    thumbnail: hotel2,
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: "Bathroom",
    tags: [{ value: "Bathroom" }],
  },
  {
    src: hotel3,
    thumbnail: hotel3,
    thumbnailWidth: 320,
    thumbnailHeight: 230,
    caption: "Common Areas",
    tags: [{ value: "Common Areas" }],
  },
  {
    src: hotel4,
    thumbnail: hotel4,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Double room",
    tags: [{ value: "Double room " }],
  },
  {
    src: hotel5,
    thumbnail: hotel5,
    thumbnailWidth: 248,
    thumbnailHeight: 180,
    caption: "Meeting room",
    tags: [{ value: "Meeting room " }],
  },
  {
    src: hotel6,
    thumbnail: hotel6,
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    caption: "Wellness area",
    tags: [{ value: "Wellness area" }],
  },
  {
    src: hotel7,
    thumbnail: hotel7,
    thumbnailWidth: 313,
    thumbnailHeight: 230,
    caption: "Skybar",
    tags: [{ value: "Skybar" }],
  },
  {
    src: hotel8,
    thumbnail: hotel8,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Common areas",
    tags: [{ value: "Common areas " }],
  },

];
