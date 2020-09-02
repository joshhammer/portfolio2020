import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../LandingPage/LandingPage';

export default function AppContainer() {
    return(
        <div className='appcontainer'>
            <Route path='/' component={LandingPage} />
            <Navigation />
        </div>
    )
}