import react from 'react';

import headclass from './Header.module.css';

const Header = (props) => {
  return (
    <section id="home" className={headclass.body}>
      <div className={headclass.header}>
        <p>Hi, my name is</p>
        <h1>Allysa Jean Castuera</h1>
        <p>Web Developer</p>
        <div class={headclass.icon_container}>
          <img src="../images/linkedin.avif" alt="LinkedIn Profile" title="LinkedIn Profile" />
        </div>
      </div>
    </section>
  );
}

export default Header;