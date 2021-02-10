import React from 'react';
import './shopping-lists.css';
import pencil from '../../pencil-60-119100.webp';

export const ShoppingList = (props) => {
    const { list, removeList, viewLists, setViewLists, setListName } = props;

    const handleRemove = () => {
        removeList(list.id);
    };

    const handleEdit = () => {
       return [setViewLists(false), setListName(list.name)];
    };

    return (
        <div>
            <div
                className="row" 
                style={{ display: viewLists ? "flex" : "none" }}
            >
                <div className="list">
                    <p>{list.name}</p>
                </div>
                <button 
                    className="edit"
                    aria-label="Edit list"
                    onClick={handleEdit}>
                    <img className="pencil" src={pencil} alt="edit"></img>
                </button>
                <button 
                    className="remove"
                    aria-label="Remove list"
                    onClick={handleRemove}>X
                </button>
            </div>
        </div>
    )
};