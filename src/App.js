import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
