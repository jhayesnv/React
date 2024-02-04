import React from 'react';

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className='footer'>{isOpen ? <p>We're currently open!</p> : <p>Sorry, we are currently closed.</p>}</footer>
}