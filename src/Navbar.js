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
                    <NavLink to='/binary-numbers-app/' activestyle="true">
                        Home
                    </NavLink>
                    <NavLink to='/binary-numbers-app/about' activestyle="true">
                        About
                    </NavLink>
                    <NavLink to='/binary-numbers-app/unsigned-binary-int' activestyle="true">
                        Unsigned Binary Integer
                    </NavLink>
                    <NavLink to='/binary-numbers-app/two-s-complement' activestyle="true">
                        Two's Complement
                    </NavLink>
                    <NavLink to='/binary-numbers-app/denary-to-binary' activestyle="true">
                        Denary to Binary
                    </NavLink>
                </NavMenu>
            </Nav>
        </React.Fragment>
    )
}