import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Routes from "./routes";
import "./css/global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
