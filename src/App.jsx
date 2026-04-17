import React from "react";
import CustomNavbar from "./Nav";
import Header from "./Header";
import Features from "./Features";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <CustomNavbar />
      <Header />
      <Features />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
