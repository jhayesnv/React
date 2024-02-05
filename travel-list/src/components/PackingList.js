import React from "react";
import Item from "./Item";

export default function PackingList({ items }) {
    return (
        <div className="list">
            <ul >
                {items && items.map(item => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
        </div>

    )
};