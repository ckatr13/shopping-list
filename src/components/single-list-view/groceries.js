import React from 'react';
import './list.css';
import { isEmpty } from '../../utilities';
import pencil from '../../pencil-60-119100.webp';

export const Groceries = (props) => {
    const { lists, viewLists, listName, removeItem } = props;

    const handleRemove = (event) => {
        let id = Number(event.target.id);
        removeItem(id);
    };

    return (
        <div>
            {lists.map((list) => {
                if(listName === list.name) {
                    return list.groceries.map((category) => {
                        if(!viewLists && !isEmpty(category.items[0])) {
                            return (
                                <div key={category.id}>
                                    <div className="category">
                                        <h2>{category.category}</h2>
                                    </div>
                                    <ul className="grocery-list">
                                        {category.items.map((item) => {
                                            return (
                                                <li key={item.id} className="grocery-item">
                                                    <div className="list-group">
                                                        <div className="checkbox-container">
                                                            <input className="checkbox" type="checkbox"></input>
                                                        </div>
                                                        <div className="amount-container">
                                                            <p className="p">{item.amount}</p>
                                                        </div>
                                                        <div className="item-container">
                                                            <p>{item.item}</p>
                                                        </div>
                                                    </div>
                                                    <div className="list-group">
                                                        <div className="edit-item-container">
                                                            <button 
                                                                className="edit-item-button"
                                                                aria-label="Edit list">
                                                                <img className="edit-items" src={pencil} alt="edit"></img>
                                                            </button>
                                                        </div>
                                                        <div className="edit-item-container">
                                                            <button 
                                                                className="remove-item"
                                                                aria-label="Remove list"
                                                                id={item.id}
                                                                onClick={handleRemove}
                                                                >X
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        }
                        return "";
                    })
                }
                return "";
            })}
        </div>
    )
}