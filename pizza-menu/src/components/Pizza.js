import React from 'react';

export default function Pizza({item}) {
    return (
        <div className='pizza'>
            <img src={item.photoName} alt={item.name}/>
            <h3>{item.name}</h3>
            <p>{item.ingredients}</p>
            <span>${item.price}</span>
        </div>
    )
}