import React from 'react';
import './LandingPage.scss';
// import { useState, useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import MainTitle from '../MainTitle/MainTitle';

export default function LandingPage() {

    return(
        <main className="landingpage-container">
            <MainTitle />
            <Navigation />
        </main>
    )
}