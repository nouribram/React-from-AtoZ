/**
Basic Styling (CSS, Inline Styles, CSS Modules)
-------------------------------------------------------------
React allows you to style components using several approaches.
The most common are traditional CSS files, inline styles, and CSS Modules.
*/

import React from "react";
import "./App.css"; // Importing global CSS
import styles from "./Button.module.css"; // Importing CSS Module

/**
1) Using Traditional CSS
You can create a .css file (e.g., App.css) and import it into your component.
Class names are written using the className attribute.
*/
function CssExample() {
  return (
    <div className="container">
      <h2 className="title">Traditional CSS Example</h2>
      <p className="text">This is styled using global CSS classes.</p>
    </div>
  );
}

/**
2) Using Inline Styles
Inline styles are defined directly in the JSX using a style object.
They are useful for dynamic or component-specific styling.
*/
function InlineStyleExample() {
  const boxStyle = {
    backgroundColor: "#f4f4f4",
    color: "#333",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center"
  };

  return (
    <div style={boxStyle}>
      <h2>Inline Style Example</h2>
      <p>This box is styled with inline styles.</p>
    </div>
  );
}

/**
3) Using CSS Modules
CSS Modules help you avoid naming conflicts by scoping styles locally.
Class names are imported from a .module.css file as a JavaScript object.
*/
function CssModuleExample() {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>CSS Module Example</h2>
      <button className={styles.button}>Click Me</button>
    </div>
  );
}

/**
4) Key Differences
- Global CSS affects the entire app.
- Inline styles are defined inside components and applied directly.
- CSS Modules scope styles to the specific component.
*/

/**
5) Best Practices
- Use CSS Modules or styled-components for large projects.
- Use inline styles for small, dynamic changes.
- Keep a consistent naming convention for classes.
*/

function App() {
  return (
    <div>
      <h1>React Basic Styling</h1>
      <CssExample />
      <InlineStyleExample />
      <CssModuleExample />
    </div>
  );
}

export default App;
