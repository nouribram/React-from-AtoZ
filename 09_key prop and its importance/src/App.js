// -------------------------------------------------
// Understanding the key Prop in React
// -------------------------------------------------
// The `key` prop is a special attribute React uses to track list items
// It helps React know what has changed, been added, or removed
// Without keys, React cannot reliably match elements with data


// -------------------------------------------------
//  What is a Key?
// -------------------------------------------------
// A key is a unique string that React uses internally
// It acts like an ID for each element across renders
// Keys are not passed as props to components
// Example:

const items = ["A", "B", "C"];
items.map((item) => <li key={item}>{item}</li>);


// -------------------------------------------------
//  Why Keys Are Important
// -------------------------------------------------
// Keys optimize React's Virtual DOM diffing algorithm
// With keys, React updates only the changed items instead of re-rendering everything
// Benefits:
// - Faster rendering
// - Correct UI updates
// - Stable state when items are reordered
// Example:

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
users.map((user) => <li key={user.id}>{user.name}</li>);


// -------------------------------------------------
//  What Happens Without Keys?
// -------------------------------------------------
// If you don’t provide keys, React falls back to using array indexes
// This can cause bugs when:
// - Items are reordered
// - Items are added or removed
// Problems include wrong data showing in the wrong place and input state bugs
// Example:

items.map((item) => <li>{item}</li>); 


// -------------------------------------------------
// Choosing the Right Key
// -------------------------------------------------
// Best choice: a stable, unique ID from your data (like a database id).
// Avoid array indexes unless the list is static and never changes order.
// Example:

  users.map((user) => <li key={user.id}>{user.name}</li>);


// -------------------------------------------------
//  Common Mistakes
// -------------------------------------------------
// Mistakes to avoid:
// - Using the same key for multiple items
// - Using random values (Math.random()) → changes every render
// - Ignoring keys completely → React will warn
// - Using array indexes → breaks when items change order
// Example:

const tasks = ["Clean", "Cook", "Study"];
tasks.map((task, index) => <li key={index}>{task}</li>); 


// -------------------------------------------------
//  Best Practices & Recap
// -------------------------------------------------
// - Always use stable, unique keys tied to the data
// - Avoid indexes unless the list is static
// - Never use random values for keys
// - Keys are for React’s internal tracking, not for props
// - If your list UI misbehaves, check your key usage first
// Example:

const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Phone" },
];
products.map((p) => <ProductCard key={p.id} product={p} />); // ✅ Best practice
