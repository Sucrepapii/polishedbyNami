// Service data configuration

export const SERVICES_DATA = [
  {
    title: "Plain Nails",
    description:
      "Basic nail care with shaping, cuticle work, and polish application.",
    price: "From 5000 NGN",
    features: [
      "Nail shaping",
      "Cuticle care",
      "Hand massage",
      "Polish application",
    ],
    color: "bg-gradient-to-br from-pink-50 to-pink-100",
    borderColor: "border-pink-300",
    shadowColor: "shadow-pink-500/20",
    hoverColor: "hover:shadow-pink-500/30",
  },
  {
    title: "Design",
    description: "Creative nail art and custom designs to express your style.",
    price: "From 200 NGN/Finger",
    features: [
      "Gel application",
      "UV curing",
      "3-week durability",
      "Shine finish",
    ],
    color: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-300",
    shadowColor: "shadow-purple-500/20",
    hoverColor: "hover:shadow-purple-500/30",
  },
  {
    title: "Toe Nails",
    description:
      "Professional pedicure services for healthy and beautiful feet.",
    price: "From 3000 NGN",
    features: [
      "Custom length",
      "Strength building",
      "Shape customization",
      "Full design",
    ],
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-300",
    shadowColor: "shadow-blue-500/20",
    hoverColor: "hover:shadow-blue-500/30",
  },
  {
    title: "Pedicure",
    description: "Complete foot care with exfoliation, massage, and polish.",
    price: "From 8000 NGN",
    features: [
      "Hand-painted designs",
      "3D elements",
      "Glitter & gems",
      "Custom patterns",
    ],
    color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-300",
    shadowColor: "shadow-yellow-500/20",
    hoverColor: "hover:shadow-yellow-500/30",
  },
] as const;

export const NAIL_SERVICES = {
  "Plain Nails": {
    description:
      "Basic nail care with shaping, cuticle work, and polish application.",
    subtypes: {
      Acrylic: {
        categories: [
          {
            name: "Short",
            options: [
              { name: "1 magnet", price: 8000 },
              { name: "2 magnet", price: 9000 },
            ],
          },
          {
            name: "Medium",
            options: [
              { name: "3 magnet", price: 10000 },
              { name: "4 magnet", price: 11000 },
            ],
          },
          {
            name: "Long",
            options: [
              { name: "5 magnet", price: 12000 },
              { name: "6 magnet", price: 13000 },
            ],
          },
          {
            name: "X-Long",
            options: [
              { name: "7 magnet", price: 14000 },
              { name: "8 magnet", price: 15000 },
            ],
          },
        ],
      },
      Gel: {
        categories: [
          {
            name: "Short",
            options: [
              { name: "1 magnet", price: 5000 },
              { name: "2 magnet", price: 6000 },
            ],
          },
          {
            name: "Medium",
            options: [
              { name: "3 magnet", price: 7000 },
              { name: "4 magnet", price: 8000 },
            ],
          },
          {
            name: "Long",
            options: [
              { name: "5 magnet", price: 9000 },
              { name: "6 magnet", price: 10000 },
            ],
          },
          {
            name: "X-Long",
            options: [
              { name: "7 magnet", price: 11000 },
              { name: "8 magnet", price: 12000 },
            ],
          },
        ],
      },
    },
  },
  Design: {
    categories: [
      {
        name: "Per Finger",
        options: [
          { name: "French tip", price: 200, perFinger: true },
          { name: "Air brush", price: 250, perFinger: true },
          { name: "Chrome", price: 250, perFinger: true },
          { name: "3D", price: 260, perFinger: true },
          { name: "Cat eye", price: 400, perFinger: true },
          { name: "Blooming gel", price: 250, perFinger: true },
        ],
      },
    ],
    description: "Creative nail art and custom designs to express your style.",
  },
  "Toe Nails": {
    categories: [
      {
        name: "Toe Services",
        options: [
          { name: "Soak Off", price: 2000 },
          { name: "Gel on Natural Toes", price: 3000 },
          { name: "Fixing on Big Toe alone", price: 4000 },
          { name: "Gel Fixing on all Toes", price: 5000 },
          { name: "Plain Acrylic", price: 6000 },
        ],
      },
    ],
    description:
      "Professional pedicure services for healthy and beautiful feet.",
  },
  Pedicure: {
    categories: [
      {
        name: "Pedicure Prices",
        options: [
          { name: "Male", price: 10000 },
          { name: "Female", price: 8000 },
        ],
      },
    ],
    description: "Complete foot care with exfoliation, massage, and polish.",
  },
} as const;
