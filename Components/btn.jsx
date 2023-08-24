import React, { useState } from 'react'
import './Btn.css'

const Btn = () => {
    const [showAddButton, setShowAddButton] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const handleAddClick = () => {
        setShowAddButton(false);
        setQuantity(1); // Reset quantity to 1 when adding again
    };

    const handlePlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        } else {
            setQuantity(0);
            setShowAddButton(true);
        }
    };
    return (
        <div>
            <div className="App">
                <div className={`btnAdd ${showAddButton ? "show" : "hide"}`}>
                    <button onClick={handleAddClick}>Add</button>
                </div>
                <div className={`btncart ${showAddButton ? "hide" : "show"}`}>
                    <button onClick={handleMinusClick}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlusClick}>+</button>
                </div>
            </div>

        </div>
    )
}

export default Btn
