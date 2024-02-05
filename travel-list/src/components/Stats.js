import React from "react";

export default function Stats({items}) {
    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed === true).length;
    const percentage = Math.round((packedItems / totalItems) * 100);

    return (
        <footer className="stats">
            { percentage === 100 ? 'You got everything ready to go!' : `You have ${totalItems} items in your list, and you already packed
            ${packedItems} (${totalItems && packedItems > 0 ? percentage + '%' : 0 + '%'})`}

        </footer>
    )
};