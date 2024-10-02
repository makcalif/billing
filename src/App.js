import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';

// Import the page components
import Home from './pages/Home';
import Bank from './pages/Bank';
import Compare from './pages/Compare';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';

import './App.css';

Amplify.configure(awsconfig);

// function Home() {
//   return (
//     <section>
//       <h2>Home</h2>
//       <p>Welcome to the Home page!</p>
//     </section>
//   );
// }

// function About() {
//   return (
//     <section>
//       <h2>About</h2>
//       <p>Learn more about us!</p>
//     </section>
//   );
// }

// function Services() {
//   return (
//     <section>
//       <h2>Services</h2>
//       <p>Our services include...</p>
//     </section>
//   );
// }

// function Portfolio() {
//   return (
//     <section>
//       <h2>Portfolio</h2>
//       <p>Check out our work!</p>
//     </section>
//   );
// }

// function Contact() {
//   return (
//     <section>
//       <h2>Contact</h2>
//       <p>Get in touch with us!</p>
//     </section>
//   );
// }

function App() {
  return (
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <Router>
            <div className="App">
              <header className="App-header">
                <h1>My Basic React App with Menu</h1>
                <nav>
                  <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bank">Bank</Link></li>
                    <li><Link to="/compare">Compare</Link></li>
                    {/*<li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li> */}
                  </ul>
                </nav>
                <button onClick={signOut}>Sign Out</button>
              </header>
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/bank" element={<Bank />} />
                  <Route path="/compare" element={<Compare />} />
                  {/*<Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} /> */}
                </Routes>
              </main>
            </div>
          </Router>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}


export default App;