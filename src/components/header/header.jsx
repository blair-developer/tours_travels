import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import logo1 from '../../assets/images/logo3.png'
import './header.css';

const nav__links = [
    {
        path: '/home',
        display: 'HOME'
    },
    {
        path: '/about',
        display: 'ABOUT'
    },
    {
        path: '/tours',
        display: 'TOURS'
    },
];

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const closeMenu = () => {
        setIsMenuActive(false);
    };

    const headerRef = useRef(null);

    const stickyHeadFunc = () => {
        window.addEventListener('scroll', () => {
            const header = headerRef.current;
            if (header) {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    header.classList.add('sticky__header');
                } else {
                    header.classList.remove('sticky__header');
                }
            }
        });
    };

    useEffect(() => {
        stickyHeadFunc();
        return () => window.removeEventListener('scroll', stickyHeadFunc);
    }, []);

    return (
        <header className={`header ${isMenuActive ? 'menu-active' : ''}`} ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <img src={logo1} alt="" />
                        </div>
                        <div className={`navigation ${isMenuActive ? 'active' : ''}`}>
                            <ul className={`menu d-flex align-items-center gap-4 ${isMenuActive ? 'hidden' : ''}`}>
                                {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) =>
                                                navClass.isActive ? 'active__link' : ''
                                            }
                                            onClick={closeMenu} // Close sidebar when menu item is clicked
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center">
                                <Button className="btn secondary__btn">
                                    <Link to="/login">Login</Link>
                                </Button>
                                <Button className="btn primary__btn">
                                    <Link to="/register">Register</Link>
                                </Button>
                            </div>
                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
            <div className={`sidebar-card ${isMenuActive ? 'active' : ''}`}>
            <div className="social-links">
            {/* Add social icons or links here */}
                <a href="#" className="social-link"><i className="ri-facebook-fill"></i></a>
               <a href="#" className="social-link"><i className="ri-twitter-fill"></i></a>
                <a href="#" className="social-link"><i className="ri-instagram-fill"></i></a>
           </div>
                <ul className="sidebar-menu gap-1">
                    {nav__links.map((item, index) => (
                        <li className="sidebar-menu-item gap-3" key={index}>
                            <NavLink
                                to={item.path}
                                className={(navClass) =>
                                    navClass.isActive ? 'active__link' : ''
                                }
                                onClick={closeMenu} // Close sidebar when menu item is clicked
                            >
                                {item.display}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
