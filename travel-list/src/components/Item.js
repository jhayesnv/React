import React from "react";

export default function Item({item, handleDeleteItem, handleToggleItem}) {
    return (
        <li>
            <input type='checkbox' value={item.packed} onChange={() => handleToggleItem(item.id)}/>
            <span style={item.packed ? {textDecoration: 'line-through' } : {}}>
                {item.count} x {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id)} style={{color: 'red'}}>&times;</button>
        </li>
    )
};