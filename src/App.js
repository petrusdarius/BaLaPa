import React from 'react';
import './App.css';

import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import Jumbotron from './Jumbotron.js';
import About from './About.js';
import Message from './Message.js'
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Jumbotron/>
        <Gallery/>
        <About/>
        <Message/>
        <Footer/>
      </div>
    )
  }
}

export default App;