import React from 'react';
import './shopping-lists.css';
import pencil from '../../edit.png';
import trash from '../../trash.png';

export const ShoppingList = (props) => {
    const { list, removeList, viewLists, setViewLists, setListName, recipes, resetAddState } = props;

    const handleRemove = () => {
        removeList(list.id);
    };

    const handleEdit = () => {
        console.log(recipes);
        return [setViewLists(false), 
            setListName(list.name),
            resetAddState(), 
        ];
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
                    onClick={handleRemove}>
                        <img className="trash" src={trash} />
                </button>
            </div>
        </div>
    )
};