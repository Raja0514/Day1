const heading4 = React.createElement(
  "h2",
  {
    id: "welcome1",
  },
  "Namaste React Js-React DOM"
);

console.log(heading4);

const heading3 = React.createElement(
  "h1",
  {
    id: "welcome",
  },
  "Namaste React Js-React DOM"
);

console.log(heading3);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading4, heading3]
);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

console.log(root1);

// passing a Element inside react root

root1.render(container);


//const test=<h1 id="root">welcome</h1>