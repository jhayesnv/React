import React from "react";

export default function Item({item}) {
    return (
        <li>
            <span style={{}}>
                {item.count} x {item.description}
            </span>
            <button style={{color: 'red'}}>&times;</button>
        </li>
    )
};