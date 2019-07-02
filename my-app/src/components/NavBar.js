import React, { useState } from 'react';
import Search from './Search';

export default function NavBar(){
    return (
        <header className="navbar">
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li><Search/></li>
            </ul>
        </header>
    )
}
