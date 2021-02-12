import React, { useState } from 'react';
import './list.css';
import { ListNameForm } from './list-name-form';
import { Groceries } from './groceries';
import { AddItem } from '../add-item/add-item';
import { GroceriesByRecipe } from './groceries-by-recipe';

export const List = (props) => {
    const { editName, viewLists, setEditName, updateList, listName, setListName, lists, removeItem, addNewItem, viewEditItem, setViewEditItem } = props;
    const [ viewByRecipe, setViewByRecipe] = useState(false);

    const handleClick = () => {
        return setViewEditItem(true);
    }

    const handleRecipeClick = () => {

    }

    const handleRemove = (event) => {
        let id = Number(event.target.id);
        removeItem(id);
    };

    const toggleViewByRecipe = () => {
        setViewByRecipe(true);
    }

    const toggleViewByCategory = () => {
        setViewByRecipe(false);
    }

    return (
        <div>
            <ListNameForm                 
                editName={editName}
                setEditName={setEditName}
                updateList={updateList}
                listName={listName}
                setListName={setListName}
                lists={lists}/>
            
            {!viewEditItem ? (
                <div>
                    <button className="add-item" onClick={handleClick}>+ Add Item</button>
                    <button className="add-item" onClick={handleRecipeClick}>Recipes</button>
                    <br></br>
                    <button className="view-category" id="view-category" onClick={toggleViewByCategory}>View By Category</button>
                    <button className="view-category" onClick={toggleViewByRecipe}>View By Recipe</button>
                    {!viewByRecipe ? <Groceries
                        viewLists={viewLists}
                        listName={listName}
                        lists={lists}
                        handleRemove={handleRemove} /> : ""}
                    {viewByRecipe ? <GroceriesByRecipe 
                        lists={lists}
                        handleRemove={handleRemove}/> : ""}
                </div>) : ""}

            {viewEditItem ? 
                <AddItem setViewEditItem={setViewEditItem} listName={listName} addNewItem={addNewItem} /> : ""} 
        </div>
    )
}

export default List;