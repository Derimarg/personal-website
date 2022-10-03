import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import { Container } from 'reactstrap';
import { nav__links } from '../constants/constantsDB';
import classes from '../styles/Header.module.css';
import { IoCallOutline, IoMenuOutline } from 'react-icons/io5';

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  /**
   * If the user scrolls down more than 80px, add the class `header__shrink` to the header. If the user
   * scrolls back up to less than 80px, remove the class `header__shrink` from the header
   */
  const shrinkHeader = () => {
    if (document.body.scrollTo > 80 || document.documentElement.scrollTo > 80) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  /* Adding an event listener to the window object. The event listener is listening for the scroll
  event. When the scroll event is triggered, the shrinkHeader function is called. */
  useEffect(() => {
    window.addEventListener('scroll', shrinkHeader);

    return () => window.removeEventListener('scroll', shrinkHeader);
  }, []);

  /**
   * When the menu button is clicked, toggle the class of the menu to active.
   */
  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={classes.header} ref={headerRef}>
      <Container>
        <div className={classes.nav__wrapper}>
          <div className={classes.logo}>
            <h1>Portfolio</h1>
          </div>

          <div
            className={classes.navigation}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={classes.nav__menu}>
              {nav__links.map((item, idx) => {
                return (
                  <Link key={idx} href={item.path}>
                    {item.label}
                  </Link>
                );
              })}

              <div className={classes.nav__right}>
                <p className=' d-flex align-items-center gap-2 mb-0'>
                  <IoCallOutline />
                </p>
              </div>
            </div>
          </div>
          <span className={classes.mobile__menu}>
            <IoMenuOutline onClick={toggleMenu} />
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
