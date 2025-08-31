/**
 * React Conditional Rendering Explained 
 * ------------------------------------------------
 */

// ============================================================
// What is Conditional Rendering?
// ============================================================
/**
 * - Conditional rendering means showing UI based on conditions.
 * - Similar to how we use if/else in JavaScript.
 * - In React, conditions decide which components or elements should appear.
 */

import React, { useState, Suspense, lazy } from "react";

// ============================================================
// Using if/else Statements
// ============================================================
/**
 * Classic JavaScript if/else can be used before return().
 */
function IfElseExample({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back, User! </h2>;
  } else {
    return <h2>Please log in.</h2>;
  }
}

// ============================================================
//  Ternary Operator (? :)
// ============================================================
/**
 * Ternary operator is short and useful inside JSX.
 */
function TernaryExample({ isDay }) {
  return (
    <div>
      <h3>{isDay ? "Good Morning!" : " Good Evening!"}</h3>
    </div>
  );
}

// ============================================================
// Logical AND (&&)
// ============================================================
/**
 * Great when we only want to render something if condition is true.
 */
function AndOperatorExample({ hasNotifications }) {
  return (
    <div>
      <h3>Dashboard</h3>
      {hasNotifications && <p>You have new notifications </p>}
    </div>
  );
}

// ============================================================
// Conditional Rendering with Variables
// ============================================================
/**
 * Store JSX in variables and decide what to render.
 */
function VariableExample({ role }) {
  let message;
  if (role === "admin") {
    message = <p>Welcome Admin </p>;
  } else if (role === "user") {
    message = <p>Welcome User </p>;
  } else {
    message = <p>Welcome Guest </p>;
  }
  return <div>{message}</div>;
}

// ============================================================
// Hiding Components with null
// ============================================================
/**
 * Returning null means "render nothing".
 */
function NullExample({ show }) {
  if (!show) return null;
  return <p>I am visible now! </p>;
}

// ============================================================
//Advanced Example (Lazy Loading + Suspense)
// ============================================================
/**
 * We can even conditionally render components lazily to optimize performance.
 */
const LazyProfile = lazy(() => import("./FakeProfile"));

function LazyExample({ load }) {
  return (
    <div>
      <h3>User Section</h3>
      {load ? (
        <Suspense fallback={<p>Loading profile...</p>}>
          <LazyProfile />
        </Suspense>
      ) : (
        <p>Profile is hidden </p>
      )}
    </div>
  );
}

// ============================================================
// DEMO APP — Try all examples
// ============================================================
export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h1>React Conditional Rendering Demo</h1>

      <IfElseExample isLoggedIn={true} />
      <TernaryExample isDay={false} />
      <AndOperatorExample hasNotifications={true} />
      <VariableExample role="admin" />
      <NullExample show={show} />
      <button onClick={() => setShow(!show)}>Toggle Null Example</button>
      <LazyExample load={false} />
    </div>
  );
}
