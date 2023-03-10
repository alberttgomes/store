import React, { FC, useEffect } from "react";
import './navbarStyles.scss';
import { useState } from 'react';

interface IPropsNavbar {
    items: {
        logo:{
            alt: string,
            photo: string,
        },
        path: {
            one: string,
            two: string
        }
    };
}

const Navbar: FC <IPropsNavbar> = ({ items }) => {
    const [item, setItem] = useState<string>();

    useEffect(() => {
        items.logo.photo != '' ? 
                setItem(items.logo.photo) : setItem("My Store");
    }, [items]);

    return(
        <div className="${prefix}-navbar-main">
            <nav className="${prefix}-wrapper-navbar">
                <img
                    className="{prefix}-logo-navbar"
                    src={item}
                    alt={items.logo.alt}
                />
                <ul className="${prefix}-items-navbar">
                    <li>{items.path.one}</li>
                    <li>{items.path.two}</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;