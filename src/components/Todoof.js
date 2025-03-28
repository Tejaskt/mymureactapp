import React, { useState } from 'react';

function Todoof() {
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState("");
    const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

    const addOrUpdateData = () => {
        if (editIndex !== null) {
            // Update existing item
            const updatedData = [...data];
            updatedData[editIndex] = msg;
            setData(updatedData);
            setEditIndex(null); // Reset edit mode
        } else {
            // Add new item
            setData([...data, msg]);
        }
        setMsg(""); // Clear input
    };

    const editItem = (index) => {
        setMsg(data[index]); // Load selected item into input
        setEditIndex(index); // Set edit mode
    };

    const removeItem = (index) => {
        const filteredData = data.filter((_, i) => i !== index);
        setData(filteredData);
    };

    return (
        <>
            <h1>Todo</h1>
            Note: <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
            <input 
                type="button" 
                value={editIndex !== null ? "Update" : "Add"} 
                onClick={addOrUpdateData} 
            />
            <hr />
            <ul>
                {data.map((value, index) => (
                    <li key={index}>
                        {value} 
                        <button onClick={() => editItem(index)}>Edit</button>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todoof;
