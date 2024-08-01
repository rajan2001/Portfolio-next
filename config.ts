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

export const blogs = [
  {
    id: 6,
    heading: "4 Ways to Create an Enum in JavaScript",
    createdAt: "June 5th, 2023",
    keyword: ["enum", "javascript"],
    paragraph: [
      {
        id: 1,
        heading: "1. Enum based on a plain object",
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
      {
        id: 2,
        heading: "2. Enum value types",
        points: [
          "Besides the string type, the value of an enum can be a number:",
        ],
        codes: `const Sizes = {
  Small: 0,
  Medium: 1,
  Large: 2
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
        images: "",
      },
      {
        id: 3,
        points: [
          "Sizes enum in the above example is an numeric enum because the values are numbers: 0, 1, 2.",
          "You can also create a symbol enum:",
        ],
        codes: `const Sizes = {
  Small: 0,
  Medium: 1,
  Large: 2
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
      },

      {
        id: 4,
        heading: "3. Enum based on Object.freeze()",
        points: [
          "A good way to protect the enum object from modifications is to freeze it. When an object is frozen, you cannot modify or add new properties to the object. In other words, the object becomes read-only.",
          "In JavaScript, Object.freeze() utility function freezes an object. Let's freeze the sizes enum:",
        ],
        codes: `const Sizes = Object.freeze({
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
})

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
      },
    ],
    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420855/zqpjw1q7l4o0oi7bihug.jpg",
    featured: true,
  },
  {
    id: 1,
    heading: "useEffect vs useLayoutEffect",
    createdAt: "June 5th, 2023",
    keyword: ["useEffect", "React"],
    paragraph: [
      {
        id: 1,
        heading: "1. Enum based on a plain object",
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
      {
        id: 2,
        heading: "2. Enum value types",
        points: [
          "Besides the string type, the value of an enum can be a number:",
        ],
        codes: `const Sizes = {
  Small: 0,
  Medium: 1,
  Large: 2
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
        images: "",
      },
      {
        id: 3,
        points: [
          "Sizes enum in the above example is an numeric enum because the values are numbers: 0, 1, 2.",
          "You can also create a symbol enum:",
        ],
        codes: `const Sizes = {
  Small: 0,
  Medium: 1,
  Large: 2
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
      },

      {
        id: 4,
        heading: "3. Enum based on Object.freeze()",
        points: [
          "A good way to protect the enum object from modifications is to freeze it. When an object is frozen, you cannot modify or add new properties to the object. In other words, the object becomes read-only.",
          "In JavaScript, Object.freeze() utility function freezes an object. Let's freeze the sizes enum:",
        ],
        codes: `const Sizes = Object.freeze({
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
})

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
      },
    ],

    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420981/iewvo4dqjbrgxsmcq3gc.jpg",
    featured: false,
  },

  {
    id: 2,
    heading: "React Filter Component: A Comprehensive Guide",
    createdAt: "June 5th, 2023",
    keyword: ["React", "javascript"],
    paragraph: [
      {
        id: 1,
        heading: "1. Understanding the Filter Component",
        points: [
          `At its core, a filter component is a crucial element for managing and presenting data 
          in a structured and organized manner within a React application. It allows developers to 
          selectively display or hide elements in a collection based on specific criteria, such as 
          user preferences, search queries, or custom logic.`,
          `The filter component can be particularly useful when dealing with lists of data, tables, or any scenario where 
          you need to display a subset of items that meet certain conditions. Instead of rendering all the data and 
        then manually hiding or showing elements based on user actions, you can leverage the filter 
        component to handle this process efficiently.`,
        ],
        codes: ``,
        images: "",
      },
      {
        id: 2,
        heading: "2. Implementing a Basic Filter Component",
        points: [
          `Now that we understand the significance of filter components, let’s dive into 
         implementing a basic filter component in a React application. We’ll start with a straightforward 
         example of filtering a list of items by a specific attribute.`,
        ],
        codes: ``,
        images: "",
      },
      {
        id: 3,
        heading: `3. Setting Up the Project`,
        points: [
          `Before we proceed, make sure you have Node.js and npm 
         (Node Package Manager) installed on your system. If not, you can download and 
         install them from the official Node.js website.`,
          `Once you have Node.js and npm installed, create a new React application using the following commands:`,
        ],
        codes: `npx create-react-app filter-demo
cd filter-demo
npm start`,
      },

      {
        id: 4,
        heading: "Creating a Sample Data Set",
        points: [
          `For our example, we’ll create a s
          imple dataset representing a list of products. Open the src/App.js file in your project and add the following data:`,
        ],
        codes: `import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product 1', category: 'Electronics' },
  { id: 2, name: 'Product 2', category: 'Clothing' },
  { id: 3, name: 'Product 3', category: 'Electronics' },
  { id: 4, name: 'Product 4', category: 'Books' },
  // Add more products as needed
];

function App() {
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;`,
      },
    ],
    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420519/p9r6nwkqhpunfe7aqfi5.jpg",
    featured: false,
  },

  {
    id: 5,
    heading: "4 Ways to Create an Enum in JavaScript",
    createdAt: "June 5th, 2023",
    keyword: ["enum", "javascript"],
    paragraph: [
      {
        id: 1,
        heading: "1. Enum based on a plain object",
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
      {
        id: 2,
        heading: "2. Enum value types",
        points: [
          "Besides the string type, the value of an enum can be a number:",
        ],
        codes: `const Sizes = {
  Small: 0,
  Medium: 1,
  Large: 2
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
        images: "",
      },
      {
        id: 3,
        points: [
          "Sizes enum in the above example is an numeric enum because the values are numbers: 0, 1, 2.",
          "You can also create a symbol enum:",
        ],
        codes: `const Sizes = {
  Small: 0,
  Medium: 1,
  Large: 2
}

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
      },

      {
        id: 5,
        heading: "3. Enum based on Object.freeze()",
        points: [
          "A good way to protect the enum object from modifications is to freeze it. When an object is frozen, you cannot modify or add new properties to the object. In other words, the object becomes read-only.",
          "In JavaScript, Object.freeze() utility function freezes an object. Let's freeze the sizes enum:",
        ],
        codes: `const Sizes = Object.freeze({
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
})

const mySize = Sizes.Medium

console.log(mySize === Sizes.Medium) // logs true`,
      },
    ],
    image:
      "https://res.cloudinary.com/dveu3m229/image/upload/v1722420855/zqpjw1q7l4o0oi7bihug.jpg",
    featured: false,
  },
];
