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

    const submit = (recipe) => {
        props.setViewEditItem(false);
        let item;
        if(!recipe) {
            item = {
                id: generateId().toString(), 
                item: newItem, 
                amount: quantity + " " + measurement, 
                recipe: 'Other',
                addState: false,
                checked: false
            };
            props.addNewItem(item, category, props.listName)
        } else {
            const recipeItem = {
                id: generateId().toString(),
                category: category,
                name: newItem,
                amount: quantity + " " + measurement,
                recipe: recipe.name,
                addState: true,
            }
            props.recipes.map(r => {
                if(r.name === recipe.name) {
                    return r.items.push(recipeItem);
                }
                return "";
            })
            props.setRecipes((prev) => [
                ...prev
            ]);
            setNewItem('');
            setCategory('');
            setQuantity('');
            setMeasurement('');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
            if (props.recipe) {
                submit(props.recipe);
            } else {
                submit();
            }
    }

    return (
        <form className="add-item-form" onSubmit={handleSubmit}>
            <div className="add-item-label">
                <label className="new-item-label" htmlFor="new-item"> + Add Item</label>
            </div>
            <div className="add-item-inputs">
                <div className="form-bar">
                    <input
                        id="new-item"         
                        type="text"
                        aria-label="Add Item"
                        placeholder="Item name"
                        value={newItem}
                        onChange={handleNewItemChange} 
                        name="body" 
                        required>      
                    </input>
                    <select 
                        id="select-category" 
                        name="category"
                        placeholder="Select"
                        value={category}
                        onChange={handleCategoryChange}
                        required>
                        <option value=""> -- Select Type -- </option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Deli">Deli</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Pantry">Pantry</option>
                        <option value="Frozen">Frozen</option>
                        <option value="Meat">Meat</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>
                </div>
                <div className="form-bar" id="line">
                    <label htmlFor="quantity">Quantity:</label>
                    <input 
                        type="string" 
                        id="quantity" 
                        name="quantity" 
                        // min="1" max="100"
                        aria-label="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        style={{width: "40px"}}
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
                </div>
            </div>
            <br></br>
            <button className="button" type="submit" value="Add">Add</button>
        </form>
    )
}