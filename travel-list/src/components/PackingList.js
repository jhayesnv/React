import React from "react";
import Item from "./Item";

export default function PackingList({ items, handleDeleteItem, handleToggleItem}) {
    return (
        <div className="list">
            <ul >
                {items && items.map(item => (
                    <Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}/>
                ))}
            </ul>
        </div>

    )
};