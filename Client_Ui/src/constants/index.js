import {
  beef_dishes,
  beers,
  Boils,
  Brochettes,
  Buffet,
  Burgers,
  Cognae,
  Egg_Dishes,
  Fish_Dishes,
  Fresh_Juices,
  Gin,
  Local_Food,
  Milkshakes_Drink,
  Pasta,
  Pizza,
  Pork,
  Side_Dishes,
  Smoothies_Drinks,
  Snacks,
  Soft_Drink,
  Sparkling,
  Specialities,
  Starter_salad,
  Starter_soup,
  Tabacco,
  Tequila,
  Vegetalian_Dishes,
  Whiskey,
  Wines,
  Grilled,
  Hot_Drinks,
  Kids_Menu,
  Liqueur,
  Chicken_Dishes,
} from "../assets/product";

import {
  menu,
  bell,
  instagram,
  left_arrow,
  right_arrow,
  close,
} from "../assets/icon";

export const navbar = [
  {
    id: "home",
    name: "Home",
    icon: "",
  },
  {
    id: "about",
    name: "About Us",
    icon: "",
  },
  {
    id: "menu",
    name: "Menu",
    icon: "",
  },
  {
    id: "contact",
    name: "Contact",
    icon: "",
  },
];

export const Herosection = {
  head: "Free Zone Bar & Resto",
  paragraph:
    "Your go-to spot for good food, bold drinks, and unforgettable nights. Whether you’re here to chill with friends, catch a match, or dance the night away— Free Zone delivers the vibe.",
  button: [
    {
      name: "Explore Menu",
      icon: menu,
    },
    {
      name: "Order on Instargram",
      icon: instagram,
    },
  ],
};

export const about = {
  part1: {
    title: "About Free Zone",
    paragraph:
      "Free Zone Bar & Resto is a modern social space built for people who enjoy great taste, great sound, and great company. We combine a lively bar atmosphere with a quality restaurant experience—perfect for after-work drinks, weekend hangouts, birthdays, and private events.",
  },
  part2: {
    title: "Why People Choose FreeZone",
    items: [
      { icon: "", par: "Affordable prices with premium quality" },
      { icon: "", par: "Friendly, fast, and professional service" },
      { icon: "", par: "Great music and crowd" },
      { icon: "", par: "Perfect for groups, couples, and celebrations" },
    ],
  },
};
export const menuTitle = {
  Food: {
    title: " Our Delicious Food Menu",
    description:
      " Savor the flavors of our diverse food menu, crafted to satisfy every craving.",
  },
  Drink: {
    title: " Our Refreshing Drink Menu",
    description:
      " Quench your thirst with our wide selection of refreshing drinks, perfect for any occasion.",
  },
};

export const menuDrink = [
  {
    preview: {
      id: "smoothies_drinks",
      image: Smoothies_Drinks,
      name: "Smoothies & Drinks",
      button: "View Items",
      description:
        "A refreshing selection of smoothies and beverages to quench your thirst.",
    },
    items: [
      {
        id: "smoothies1",
        title: "Mango Smoothie",
        price: "4000 RFW",
        button: "Order Now",
      },
      {
        id: "smoothies2",
        title: "Mango Banana Smoothie",
        price: "4000 RFW",
        button: "Order Now",
      },
      {
        id: "smoothies3",
        title: "Mixed Fruit Smoothie",
        price: "4000 RFW",
        button: "Order Now",
      },
      {
        id: "smoothies4",
        title: "Stawberry Smoothie",
        price: "4000 RFW",
        button: "Order Now",
      },
    ],
  },
  {
    preview: {
      id: "milkshakes_drink",
      image: Milkshakes_Drink,
      name: "Milkshakes & Drinks",
      button: "View Items",
      description:
        "A delicious selection of milkshakes and beverages to satisfy your cravings.",
    },
    items: [
      {
        id: "milkshakes1",
        title: "Chocolate Milkshake",
        price: "4000 RFW",
        button: "Order Now",
      },
      {
        id: "milkshakes2",
        title: "Vanilla Milkshake",
        price: "4000 RFW",
        button: "Order Now",
      },
      {
        id: "milkshakes3",
        title: "Strawberry Milkshake",
        price: "4000 RFW",
        button: "Order Now",
      },
      {
        id: "milkshakes4",
        title: "Mixed Milkshake",
        price: "4000 RFW",
        button: "Order Now",
      },
    ],
  },
  {
    preview: {
      id: "Soft_Drink",
      image: Soft_Drink,
      name: "Soft Drinks",
      button: "View Items",
      description:
        "A variety of refreshing soft drinks to enjoy with your meal.",
    },
    items: [
      {
        id: "softdrink1",
        title: "Water (500ml)",
        price: "700 RFW",
        button: "Order Now",
      },
      {
        id: "softdrink2",
        title: "Eau Gazeuse (Skol)",
        price: "1000 RFW",
        button: "Order Now",
      },
      {
        id: "softdrink3",
        title: "Panache",
        price: "700 RFW",
        button: "Order Now",
      },
      {
        id: "softdrink4",
        title: "Maltona (33cl)",
        price: "700 RFW",
        button: "Order Now",
      },
    ],
  },
];
export const menuFood = [
  {
    preview: {
      id: 0,
      image: Vegetalian_Dishes,
      name: "Vegetalian Dishes",
      button: "View Items",
      description:
        "A selection of delicious vegetarian dishes made with fresh ingredients.",
    },
    items: [
      {
        id: "veg1",
        title: "Vegetarian Plate",
        price: "6000 RFW",
        button: "Order Now",
      },
      {
        id: "veg2",
        title: "vegetarian Curry",
        price: "7000 RFW",
        button: "Order Now",
      },
    ],
  },
  {
    preview: {
      id: 1,
      image: Fish_Dishes,
      name: "Fish Dishes",
      button: "View Items",
      description:
        "A selection of delicious fish dishes prepared with fresh ingredients.",
    },
    items: [
      {
        id: "fish1",
        title: "Tilapia Butter Garlic",
        price: "8000 RFW",
        button: "Order Now",
      },
      {
        id: "fish2",
        title: "Fish Stew",
        price: "8000 RFW",
        button: "Order Now",
      },
      {
        id: "fish3",
        title: "Fish Stroganoff",
        price: "7000 RFW",
        button: "Order Now",
      },
    ],
  },
  {
    preview: {
      id: 3,
      image: Chicken_Dishes,
      name: "Chicken Dishes",
      button: "View Items",
      description:
        "Delicious chicken dishes prepared with a variety of flavors and styles.",
    },
    items: [
      {
        id: "chicken1",
        title: "Chicken Breast",
        price: "8000 RFW",
        button: "Order Now",
      },
      {
        id: "chicken2",
        title: "Chicken Legs",
        price: "8000 RFW",
        button: "Order Now",
      },
      {
        id: "chicken3",
        title: "Chicken Curry",
        price: "7000 RFW",
        button: "Order Now",
      },
      {
        id: "chicken4",
        title: "Chicken Stroganoff",
        price: "7000 RFW",
        button: "Order Now",
      },
      {
        id: "chicken5",
        title: "Chicken Stew",
        price: "7000 RFW",
        button: "Order Now",
      },
    ],
  },
  {
    preview: {
      id: "buffet",
      image: Buffet,
      name: "Buffet",
      button: "View Items",
      description: "A variety of delicious dishes served in a buffet style.",
    },
    items: [
      {
        id: "buffet1",
        title: "Medium Buffet + Soft Drink",
        price: "5000 RFW",
        button: "Order Now",
      },
      {
        id: "buffet2",
        title: "Full Buffet + Soft Drink",
        price: "8000 RFW",
        button: "Order Now",
      },
    ],
  },
];

export const call = {
  head: {
    title: "Contact Us",
    paragraph: "Looking for the perfect place to eat, drink, and vibe?",
  },
  items: [
    { icon: "", content: "Whatsapp Us" },
    { icon: "", content: "Instagram" },
    { icon: "", content: "Email Us" },
  ],
};

export const events = {
  head: {
    title: "Music, Sports & Events",
    content: "At FreeZone, there’s always something happening.",
  },
  items: [
    {
      icon: "",
      eventname: "Live DJ nights",
    },
    {
      icon: "",
      eventname: "Theme parties & weekend specials",
    },
    {
      icon: "",
      eventname: "Live sports screenings",
    },
    {
      icon: "",
      eventname: "Birthday parties & private bookings",
    },
  ],
};
