import "./App.css";
import Form from "./components/login.jsx";
import Counter from "./components/counter.jsx";
import Carousel from "./components/carousel.jsx";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  return (
    <div className="Main">
      <h1>React Login</h1>
      {!isLoggedIn ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Carousel
          images={[
            "https://source.unsplash.com/random/?Cryptocurrency&1",
            "https://source.unsplash.com/random/?Cryptocurrency&2",
            "https://source.unsplash.com/random/?Cryptocurrency&5",
          ]}
        />
      )}
      <Counter />
    </div>
  );
}

export default App;
