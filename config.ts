export const Navlink: string[] = ["Blog", "Graphic", "Project", "About"];
export const HomeProjectLinks = [
  "Nextjs",
  "Typescript",
  "NextAuth",
  "Zoho",
  "ThirdWeb",
  "Tailwind Ui",
  "Prisma",
];

`const Sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`;

export const blogs = [
  {
    id: 1,
    heading: "useEffect vs useLayoutEffect",
    createdAt: "June 5th, 2023",
    keyword: ["useEffect", "React"],
    paragraph: [
      {
        id: 1,
        heading: "Enum based on a plain object",
        points: [
          "An enum is a data structure that defines a finite set of named constants. Each constant can be accessed by its name.",
          "Let's consider the sizes of a T-shirt: Small, Medium, and Large.",
          "A simple way (though not the most optimal, see the approaches below) to create an enum in JavaScript is to use a plain JavaScript object.",
        ],
        codes: `const Sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
        images: "",
      },
    ],

    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420981/iewvo4dqjbrgxsmcq3gc.jpg",
    featured: true,
  },

  {
    id: 2,
    heading: "React Filter Component: A Comprehensive Guide",
    createdAt: "June 5th, 2023",
    paragraph: [],
    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420519/p9r6nwkqhpunfe7aqfi5.jpg",
    featured: false,
  },

  {
    id: 3,
    heading: "4 Ways to Create an Enum in JavaScript",
    createdAt: "June 5th, 2023",
    paragraph: [],
    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420855/zqpjw1q7l4o0oi7bihug.jpg",
    featured: false,
  },
];
