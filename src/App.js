import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Basic React App with Menu</h1>
        <nav>
          <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home"><h2>Home</h2><p>Welcome to the Home page!</p></section>
        <section id="about"><h2>About</h2><p>Learn more about us!</p></section>
        <section id="services"><h2>Services</h2><p>Our services include...</p></section>
        <section id="portfolio"><h2>Portfolio</h2><p>Check out our work!</p></section>
        <section id="contact"><h2>Contact</h2><p>Get in touch with us!</p></section>
      </main>
    </div>
  );
}

export default App;
