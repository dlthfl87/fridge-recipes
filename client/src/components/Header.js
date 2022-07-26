import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  window.addEventListener("resize", checkWindowSize);

  function checkWindowSize() {
    if (window.innerWidth >= 750) {
      closeNav();
    }
  }

  function setActive(page) {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`.${page}`).classList.add('active')
  }

  function addBackground() {
    document.body.classList.remove('remove-background');
  }

  function removeBackground() {
    document.body.classList.add('remove-background');
  }

  function openSidebar() {
    document.body.classList.toggle('open-sidebar');
  }

  function closeSidebar() {
    document.body.classList.remove('open-sidebar');
  }

  function toggleNav() {
    document.body.classList.toggle('open-nav');
  }

  function closeNav() {
    document.body.classList.remove('open-nav');
  }

  return (
    <header className="header">
      <nav className="nav">
        <button
          className="nav-toggle"
          onClick={toggleNav}
        >
          <span className="nav-icon"></span>
        </button>
        <ul className="nav-list">
          <li
            className="nav-list-item home active"
            onClick={() => {
              setActive('home');
              addBackground();
              openSidebar();
            }}
          ><Link
            to="/"
            onClick={closeNav}
          >Recipe</Link></li>
          <li
            className="nav-list-item about"
            onClick={() => {
              setActive('about');
              removeBackground();
            }}
          ><Link
              to="/about"
              onClick={closeNav}
            >About</Link></li>
        </ul>

        <h1
          className="logo"
          onClick={() => {
            setActive('home')
            addBackground();
          }}
          ><Link
            to="/"
            onClick={closeNav}
          >Happy Fridge</Link></h1>
      </nav>

      <h1 className="opening-title">Easy  •  Fun  •  Sustainable</h1>

      <button
        className="sidebar-toggle"
        onClick={() => {
          openSidebar();
          addBackground();
        }}
      >
      Find Recipe
      </button>
    </header>
  )
}