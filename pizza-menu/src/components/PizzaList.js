import React from 'react';
import { pizzaData } from '../data';
import Pizza from './Pizza';

export default function PizzaList() {
    const data = pizzaData

    return (
        data.map(pizza => (
         <Pizza item={pizza} key={pizza.name}/>
        ))
    )
};