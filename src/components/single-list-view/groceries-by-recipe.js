import React, { useState } from 'react';

export const GroceriesByRecipe = (props) => {
    const { lists, handleRemove } = props;

    const [recipes, setRecipes] = useState([{id: 1, name: 'None'}, {id: 2, name: 'Beans and Rice'}]);

    return (
        <div>
            {recipes.map((recipe) => {
                return  <div key={recipe.id}>
                            <div className="category">
                                <h2>{recipe.name}</h2>
                            </div>
                            <ul className="grocery-list">
                                {lists.map((list) => {
                                    return list.groceries.map((category) => {
                                        return category.items.map((item) => {
                                            if(item.recipe === recipe.name) {
                                                return <li key={item.id} className="grocery-item">
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
                                                            <div className="edit-item-container">
                                                                <button 
                                                                    className="remove-item"
                                                                    aria-label="Remove list"
                                                                    id={item.id}
                                                                    onClick={handleRemove}>X
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
            })}
            
        </div>
    )
}