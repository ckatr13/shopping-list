import React from 'react';
import trash from '../../trash.png';

export const GroceriesByRecipe = (props) => {
    const { lists, handleRemove, recipes, listName, handleCheck, setLists } = props;

    const handleClickCheck = () => {
        setLists(prev => [...prev])
    }

    return (
        <div>
            {recipes.map((recipe) => {
                if (recipe.items.some(it => !it.addState)) {
                return  <div key={recipe.id}>
                            <div className="category category-name">
                                <h2 className="category-h2">{recipe.name}</h2>
                            </div>
                            <ul className="grocery-list">
                                {lists.map((list) => {
                                    return list.groceries.map((category) => {
                                        return category.items.map((item) => {
                                            if(item.recipe === recipe.name && listName === list.name) {
                                                return <li key={item.id} className="grocery-item">
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
                                                            <div className="edit-item-container">
                                                                <button 
                                                                    className="remove-item"
                                                                    aria-label="Remove list"
                                                                >
                                                                    <img className="trash-2" src={trash} id={item.id + "b"} onClick={handleRemove} />
                                                                </button>
                                                            </div>
                                                        </li>
                                            }
                                            return "";
                                        })
                                    })
                                })}
                            </ul>
                        </div>
                }
                return "";
            })}
            
        </div>
    )
}