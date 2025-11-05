/*
  React useEffect Hook (Side Effects)
  The useEffect Hook lets you perform **side effects** in function components.
  Side effects are actions that affect something outside the component,
  such as fetching data, updating the DOM, or setting up subscriptions.

  Syntax:
    useEffect(() => {
      // side effect code
      return () => {
        // optional cleanup code
      };
    }, [dependencies]);
*/

import React, { useState, useEffect } from "react";

function ExampleUseEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome!");

  /*
    Example 1: Runs on every render (no dependency array)
  */
  useEffect(() => {
    console.log("Component rendered or updated!");
  });

  /*
    Example 2: Runs only once (on mount)
    Use empty dependency array [] to run effect once.
  */
  useEffect(() => {
    console.log("Component mounted!");
    setMessage("Component loaded!");

    // Cleanup function (runs on unmount)
    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  /*
     Example 3: Runs only when `count` changes
  */
  useEffect(() => {
    document.title = `Clicked ${count} times`;
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{message}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default ExampleUseEffect;

/*
  Summary of useEffect:

  - useEffect(() => {...}) → Runs after every render.
  - useEffect(() => {...}, []) → Runs once (componentDidMount).
  - useEffect(() => {...}, [value]) → Runs when 'value' changes.
  - Cleanup → Return a function inside useEffect to run before unmounting.

   Common use cases:
  - Fetching API data
  - Managing event listeners
  - Updating document title
  - Cleaning up timers/subscriptions
*/
