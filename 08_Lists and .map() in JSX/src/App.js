// ================================
// Lists and .map() in JSX
// ================================

// --------------------------------
// Introduction to Lists in React
// --------------------------------
// - In React, lists are used to display a collection of data dynamically.
// - Common use cases: rendering users, menu items, product cards, etc.
// - Lists are created using JavaScript arrays and JSX.

// --------------------------------
//  Creating a Basic List
// --------------------------------
function BasicList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
      </ul>
    </div>
  );
}

// --------------------------------
// S Using .map() for Lists
// --------------------------------
// - The .map() method is the best way to render lists in JSX.
// - It loops through an array and returns a new array of JSX elements.

function MapList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}

// --------------------------------
//  Adding key Prop
// --------------------------------
// - Each list item should have a unique "key" to help React optimize rendering.
// - Keys must be unique among siblings (use id or index).

function ListWithKeys() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// --------------------------------
// Rendering Objects with .map()
// --------------------------------
// - Lists often come from arrays of objects.

function ObjectList() {
  const users = [
    { id: 1, name: "Nour" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Sara" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// --------------------------------
//  Rendering Components in Lists
// --------------------------------
// - Instead of rendering <li>, you can render custom components inside .map().

function User({ name }) {
  return <h3>{name}</h3>;
}

function ComponentList() {
  const users = ["Ibrahim", "Elias", "Malik"];

  return (
    <div>
      {users.map((user, index) => (
        <User key={index} name={user} />
      ))}
    </div>
  );
}

// --------------------------------
// Slide 7 – Best Practices
// --------------------------------
// - Always use a unique key (prefer ID over index).
// - Don’t forget to return JSX inside .map().
// - Wrap list items in parent elements like <ul>, <ol>, or <div>.
// - Extract repetitive JSX into separate components.
// - Use .map() for rendering menus, API data, or repeated UI structures.


// ================================
// Exporting all examples for testing
// ================================
export default function App() {
  return (
    <div>
      <h1>React Lists & .map() Examples</h1>
      <BasicList />
      <MapList />
      <ListWithKeys />
      <ObjectList />
      <ComponentList />
    </div>
  );
}
