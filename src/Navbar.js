import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
  } from './NavbarElements';

export default function Navbar() {
    return (
        <React.Fragment>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activestyle="true">
                        Home
                    </NavLink>
                    <NavLink to='/about' activestyle="true">
                        About
                    </NavLink>
                    <NavLink to='/positive-binary-integer' activestyle="true">
                        Positive Binary Integer
                    </NavLink>
                </NavMenu>
            </Nav>
        </React.Fragment>
    )
}