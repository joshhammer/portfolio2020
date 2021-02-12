import React from 'react'
import { useState, useEffect } from 'react';

import './Navigation.scss'

export default function Navigation() {

    const [isMenuVisible, setMenuVisible] = useState(false);

    return(
        <div className="navigation-sidebar"

            >

            <div className="navigation-menu-button" onClick={() => setMenuVisible(prev => !prev)}></div>

            <div className={isMenuVisible ? 'navigation-container visible' : 'navigation-container'}>
                <div className="navigation-menu-button-black" onClick={() => setMenuVisible(prev => !prev)}></div>
                <nav>
                    <ul className="navigation-list">
                        <li className="navigation-item"><a className="navigation-link" href="/">Home</a></li>
                        <li className="navigation-item"><a className="navigation-link" href="/about">About</a></li>
                        <li className="navigation-item"><a className="navigation-link" href="/skills">Skills</a></li>
                        <li className="navigation-item"><a className="navigation-link" href="/portfolio">Portfolio</a></li>
                        <li className="navigation-item"><a className="navigation-link" href="/music">Music</a></li>
                        <li className="navigation-item"><a className="navigation-link" href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}