// Props & Component Communication in React
// =========================================

// 1. What are Props?
// -----------------------------------------
// - Props (short for "properties") are used to pass data from a parent component to a child component.
// - They make components reusable and dynamic.
// - Props are read-only (immutable): A child cannot modify the props it receives.

// Example 1: Passing Props
function Welcome(props) {
  return <h1>Hello, {props.name} </h1>;
}

const example1 = (
  <div>
    <Welcome name="Ibrahim" />
    <Welcome name="Dani" />
  </div>
);

// =========================================

// 2. Destructuring Props
// -----------------------------------------
// - Instead of writing props.name, props.age, etc., we can use destructuring.

function User({ name, age }) {
  return (
    <p>
      {name} is {age} years old.
    </p>
  );
}

const example2 = (
  <div>
    <User name="Elias" age={25} />
    <User name="Nourhan" age={30} />
  </div>
);

// =========================================

// 3. Default Props
// -----------------------------------------
// - You can provide default values for props if they are not passed.

function Greeting({ name = "Dana" }) {
  return <h2>Welcome, {name}!</h2>;
}

const example3 = (
  <div>
    <Greeting name="Nervan" />
    <Greeting /> {/* will show "Nervan" */}
  </div>
);

// =========================================

// 4. Passing Functions as Props
// -----------------------------------------
// - Props can also be functions, allowing child components to communicate back to parents.
// - This is a key way for child-to-parent communication.

function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

function Parent() {
  const handleClick = (msg) => alert(msg);

  return (
    <div>
      <Button onClick={() => handleClick("Button 1 clicked!")} label="Button 1" />
      <Button onClick={() => handleClick("Button 2 clicked!")} label="Button 2" />
    </div>
  );
}

const example4 = <Parent />;

// =========================================

// 5. Children Prop
// -----------------------------------------
// - Special prop: "children" lets you pass JSX between component tags.

function Card({ children }) {
  return <div style={{ border: "1px solid gray", padding: "10px" }}>{children}</div>;
}

const example5 = (
  <div>
    <Card>
      <h3>Card Title</h3>
      <p>This is some content inside the card.</p>
    </Card>
  </div>
);

// =========================================

// 6. Component Communication Summary
// -----------------------------------------
// - Parent → Child: Pass data via props.
// - Child → Parent: Call parent functions passed as props.
// - Sibling → Sibling: Usually through their parent (lifting state up).

// Example 6: Sibling Communication via Parent
function ChildA({ sendData }) {
  return <button onClick={() => sendData("Hello from ChildA")}>Send to ChildB</button>;
}

function ChildB({ message }) {
  return <p>ChildB received: {message}</p>;
}

function ParentComm() {
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <ChildA sendData={setMessage} />
      <ChildB message={message} />
    </div>
  );
}

const example6 = <ParentComm />;

// =========================================

// Export examples (optional, to use in App.js)
export { example1, example2, example3, example4, example5, example6 };

// =========================================
// Key Notes on Props & Communication
// - Props allow data to flow from parent → child.
// - Props are immutable inside the child.
// - Functions can be passed as props for child → parent communication.
// - The "children" prop allows nesting content inside components.
// - For sibling communication, lift state up to the parent.
