import React, { useState } from "react";

export default function Form({handleAddItems}) {
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(1);

    const createOptionList = () => {
        let optionList = Array.from({length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)
        return optionList;
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, count, packed: false, id: Date.now() };

        setDescription('');
        setCount(1);

        handleAddItems(newItem);
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select value={count} onChange={(e) => setCount(e.target.value)}>
                {createOptionList()}
            </select>
            <input type='text' placeholder="Item ..." value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    )
};