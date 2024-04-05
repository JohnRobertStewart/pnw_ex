import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/info">
                        Info
                    </NavLink>
                    <NavLink to="/contact">
                        Contact Us
                    </NavLink>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;