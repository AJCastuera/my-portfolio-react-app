
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import raw from './constants/foo.txt';

import Header from './sections/Header';
import Navbar from './UI/Navbar';
import Skills from './sections/Skills';
import Experience from './sections/Experience';

function App() {
  const [message, setMessage] = useState("");

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    setMessage(text);
  });


  const navigatePageHandler = (target_href) => {
    /*if(target_href == "#about") {
      window.scrollTo(0,0);
    }
    else if (target_href == "#skills") {
      window.scrollTo(0, 500);
    }
    else if (target_href == "#exp") {
      window.scrollTo(0, 1000);
    }*/
  }


  return (
    <div className="App">
      <Navbar onNavigatePage={navigatePageHandler}/>
      <main >
      <Header />
      <Skills />
      <Experience />
      </main>
    </div>
  );
};

export default App;
