import React, { useState } from 'react';
import './add-item.css';
import { generateId } from '../../utilities';

export const AddItem = (props) => {
    const [newItem, setNewItem] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [measurement, setMeasurement] = useState('');

    const handleNewItemChange = (event) => {
      setNewItem(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleMeasurementChange = (event) => {
        setMeasurement(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setViewEditItem(false);
        const item = {
            id: generateId(), 
            item: newItem, 
            amount: quantity + " " + measurement, 
            recipe: 'None'
        };
        props.addNewItem(item, category, props.listName)
    }

    return (
        <form  onSubmit={handleSubmit}>
            <input
                id="new-item"         
                type="text"
                aria-label="Add Item"
                placeholder="+ Add Item"
                value={newItem}
                onChange={handleNewItemChange} 
                name="body" 
                required>      
            </input>
            <select 
                id="select-category" 
                name="category"
                placeholder="Select"
                // defaultValue
                value={category}
                onChange={handleCategoryChange}
                required>
                <option value=""> -- Select Type -- </option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="beverages">Beverages</option>
                <option value="deli">Deli</option>
                <option value="bakery">Bakery</option>
                <option value="pantry">Pantry</option>
                <option value="frozen">Frozen</option>
                <option value="meat">Meat</option>
                <option value="other">Other</option>
            </select>
            <br></br>
            <label htmlFor="quantity">Quantity:</label>
            <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" max="100"
                aria-label="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                required></input>
            <input
                id="measurement"         
                type="text"
                aria-label="form of measurement"
                placeholder="Measurement"
                value={measurement}
                onChange={handleMeasurementChange} 
                name="measurement" >      
            </input>
            <br></br>
            <button className="button" type="submit" value="Add">Add</button>
        </form>
    )
}