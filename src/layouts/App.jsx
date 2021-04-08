import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";
import Pages from "./Pages.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Pages />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
