import React from 'react';

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 11;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className='footer'>{isOpen ?
    <div className='order'>
        <p>We're open until {closeHour}:00. Come visit us or order online!</p>
        <button className='btn'>Order</button>
    </div> : <p>Sorry, we are closed until {openHour}:00</p>}</footer>
}