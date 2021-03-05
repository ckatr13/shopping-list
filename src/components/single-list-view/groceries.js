import React from 'react';
import './list.css';
import { isEmpty } from '../../utilities';
import trash from '../../trash.png';

export const Groceries = (props) => {
    const { lists, viewLists, listName, handleRemove, handleCheck, handleClickCheck } = props;
    
    return (
        <div className="groceries">
            {lists.map((list) => {
                if(listName === list.name) {
                    return list.groceries.map((category) => {
                        if(!viewLists && !isEmpty(category.items[0])) {
                            return (
                                <div key={category.id}>
                                    <div className="category category-name">
                                        <h2 className="category-h2">{category.category}</h2>
                                    </div>
                                    <ul className="grocery-list">
                                        {category.items.map((item) => {
                                            return (
                                                <li key={item.id} className="grocery-item">
                                                    <div className="list-group">
                                                        <div className="checkbox-container">
                                                            <input id={item.id + "check"} className="checkbox" type="checkbox" checked={item.checked} onChange={handleCheck} onClick={handleClickCheck}></input>
                                                            <label htmlFor={item.id + "check"} className="checkmark"></label> 
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
                                                                className="remove-item"
                                                                aria-label="Remove list"
                                                                >
                                                                <img className="trash-2" src={trash} id={item.id + "a"}
                                                                onClick={handleRemove} />
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