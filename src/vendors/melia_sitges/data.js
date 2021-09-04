import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";


export const meliasitges = {
  id: "hotel_melia_sitges",
  cat: "hospitality",
  type: "Hospitality",
  title: "Hotel Melia Sitges",
  rooms: [
    {
      title: "Double room for ind Use, incl breakfast",
      units: 0,
      occupancy: 1,
      nights: 3,
      unitcost: 154,
    },
    {
      title: "Double room, for twin use, incl breakfast",
      units: 25,
      occupancy: 2,
      nights: 3,
      unitcost: 165,
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
    `  This hotel in Sitges offers more than 300 rooms of various categories, all with furnished terrace and complete bathroom, with satellite TV and wifi internet connection, which guarantee a good stay thanks also to its modern decoration in warm tones. You can relax in the outdoor swimming pools for adults and children in summer. You can taste all kinds of Mediterranean and international recipes in the hotel restaurant's dinners, and start the day with a good breakfast buffet with fresh products and freshly prepared dishes in the show cooking.`,

    `  Melià Sitges is overlooking the Aiguadolç Marina in Sitges, with easy access to the C-31 motorway which takes 20 minutes to El Prat Airport and 30 minutes to the centre of Barcelona, this hotel has an excellent location on the outskirts of the town. Only a 15-minutes walk will take you to the beautiful streets of Sitges, with numerous museums, shops and bars and 300 metres from the hotel are the small coves of the Marina and Caleta de Sitges.`,
  ],
};

export const leftIconsText = [
  "Sitges - Port Aiguadolç",
  "Restaurants & Bars",
  "300 rooms",
  "High Speed, available",
];

export const rightIconsText = [
  "1x outdoor pool",
  "checkin/out 2pm / 12pm",
  "19 x meeting rooms",
  "Wheelchair accessible",
];

export const photos = [
  {
    src: hotel1,
    thumbnail: hotel1,
    thumbnailWidth: 271,
    thumbnailHeight: 180,
    caption: "Façade of the Hotel",
    tags: [{ value: "General view " }],
  },
  {
    src: hotel2,
    thumbnail: hotel2,
    thumbnailWidth: 320,
    thumbnailHeight: 190,
    caption: "Double room",
    tags: [{ value: "Double room " }],
  },
  {
    src: hotel3,
    thumbnail: hotel3,
    thumbnailWidth: 320,
    thumbnailHeight: 230,
    caption: "Swimming Pool and Gardens",
    tags: [{ value: "Swimming Pool and Gardens" }],
  },
  {
    src: hotel4,
    thumbnail: hotel4,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Sea views",
    tags: [{ value: "Sea views" }],
  },
  {
    src: hotel5,
    thumbnail: hotel5,
    thumbnailWidth: 248,
    thumbnailHeight: 180,
    caption: "Breakfast Room",
    tags: [{ value: "Breakfast room" }],
  },
  {
    src: hotel6,
    thumbnail: hotel6,
    thumbnailWidth: 320,
    thumbnailHeight: 220,
    tags: [{ value: "Common Areas" }],
    caption: "Common Areas",
  },
  {
    src: hotel7,
    thumbnail: hotel7,
    thumbnailWidth: 313,
    thumbnailHeight: 280,
    caption: "Twin room",
    tags: [{ value: "Twin room" }],
  },
  {
    src: hotel8,
    thumbnail: hotel8,
    thumbnailWidth: 320,
    thumbnailHeight: 213,
    caption: "Well appointed bathroom with amenities",
    tags: [{ value: "Bathroom with amenities" }],
  },

];
