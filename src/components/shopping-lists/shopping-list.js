import React from 'react';
import './shopping-lists.css';
import pencil from '../../pencil-60-119100.webp';

export const ShoppingList = (props) => {
    const { list, removeList } = props;

    const handleRemove = () => {
        removeList(list.id);
    };

    return (
        <div className="row">
            <div className="list">
                <p>{list.name}</p>
            </div>
            <div className="edit">
                <img className="pencil" src={pencil} alt="edit"></img>
            </div>
            <button 
                className="remove"
                aria-label="Remove list"
                onClick={handleRemove}>X
            </button>
        </div>
    )
};