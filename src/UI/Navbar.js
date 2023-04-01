import react, {useState} from 'react';

import './Navbar.css';

const Navbar = (props) => {
  const [activeTab, setActiveTab] = useState("#about");

  const myFunction = (event) => {
    /*event.preventDefault();

    props.onNavigatePage(event.target.id);

    document.getElementById(activeTab).className = "";
    event.target.className = "active";
    setActiveTab(event.target.id);*/
  }

  const showNav = () => {
    var x = document.getElementById("myTopnav");
    console.log(x.className);
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <nav className="topnav" id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <a href="#" id="javascript:void(0);" className="icon" onClick={showNav}>
        <i className="fa fa-bars"></i>
      </a>
    </nav>
  );
}

export default Navbar;