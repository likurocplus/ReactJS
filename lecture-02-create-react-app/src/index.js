import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

function Rudius() {
  const name = "Rudius";
  return (
    <div>
      <p>My name is {name}</p>
      <img src="https://i.pinimg.com/736x/07/c0/1c/07c01cf6c639d15da3cd864a6d3bb504.jpg" />
      <button
        style={{
          borderRadius: "20px",
          backgroundColor: "blue",
        }}
      >
        Click
      </button>
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <>
      <h1>My name is {person.name}</h1>
      <img
        style={{
          width: { size },
          height: "auto",
        }}
        className="avatar"
        src={person.avatar} //Curly Braces //string is "{avatar}" => empty image
      />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Rudius />
    <Avatar
      person={{
        name: "Rudius",
        avatar:
          "https://i.pinimg.com/736x/07/c0/1c/07c01cf6c639d15da3cd864a6d3bb504.jpg",
      }}
      size={100}
    />
  </React.StrictMode>
);
