const e = React.createElement;

const Button = () =>
  e("button", { onClick: () => alert("hiciste click") }, "haz click");

const domContainer = document.querySelector("#button-container");

const root = ReactDOM.createRoot(domContainer);
root.render(e(Button));
