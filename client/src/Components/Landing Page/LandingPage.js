import React from 'react';
import { NavLink } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="landing">
            <NavLink to='/home'><img className="logo" src="https://i.pinimg.com/originals/31/b7/55/31b7558297b6e1e598b070a5b80a56e7.jpg" alt="to home" /></NavLink>
        </div>
    )
}