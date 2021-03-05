import React from 'react';
import back from '../../arrow.png';
import logo from '../../logo.png';
import pencil from '../../edit.png';
import { ShoppingListForm } from './shopping-list-form';
import { ShoppingList } from './shopping-list';
import { List } from '../single-list-view/list';

export const ShoppingLists = (props) => {
    const {lists, listName, viewLists, viewRecipes, viewEditItem, editRecipe, setViewLists,
    setViewEditItem, setViewRecipes, recipes, setEditRecipe, editName, setEditName, setLists, 
    setListName, setRecipes, addList, removeList, resetAddState, updateList, addNewItem, 
    removeItem, addNewRecipe, removeRecipe} = props;

    const handleView = () => {
        if (!viewLists && !viewEditItem && !viewRecipes && !editRecipe) {
          return setViewLists(true);
        } else if (viewEditItem) {
          return setViewEditItem(false);
        } else if (viewRecipes && !editRecipe) {
          return setViewRecipes(false)
        } else if (editRecipe) {
          recipes.map(recipe => {
            if(recipe.name === "Other") {
                return "";
            } else {
              const ing = document.getElementById(recipe.id + "edit-recipe");
              return ing.style.display = "none";
              }
          })
          return setEditRecipe(false);
        }
     };

    const handleClick = () => {
        if (!editName) {
        return setEditName(true);
        } else {
        return setEditName(false);
        }
    }

    return (
        <div className="App">
            <nav>
                <button className="back-button" onClick={handleView}>
                    <img src={back} className="back" alt="back button"></img>
                </button>
                <img src={logo} className="logo" alt="logo" />
                {/* <div className="hamburger-menu">&#9776;</div> */}
            </nav>
            <div className="list-container">
                <div className="list-name-group">
                    {lists.map((list) => {
                        if(list.name === listName && !viewLists) {
                            return (
                            <h1 key={list.id} id="list-name" style={{ display: !viewRecipes ? "block" : "none" }}>{ list.name }</h1>
                            )
                        }
                        return ""
                    })}
                    {viewLists ? <h1 id="list-name">My Shopping Lists</h1> : ""}
                    {viewRecipes ? <h1>My Recipes</h1> : ""}
                    {!viewRecipes ? 
                        <button 
                            className="edit-button" 
                            style={{ display: viewLists ? "none" : "inline" }}
                            onClick={handleClick}
                            >
                            <img className="pencil" src={pencil} alt="edit"></img>
                            </button> 
                        : ""}
                </div>
                <ShoppingListForm 
                    addList={addList}
                    viewLists={viewLists}
                    lists={lists}
                />
                {lists.map((list) => (
                    <ShoppingList 
                        key={list.id} 
                        list={list} 
                        removeList={removeList} 
                        viewLists={viewLists} 
                        setViewLists={setViewLists} 
                        setListName={setListName}
                        recipes={recipes}
                        lists={lists}
                        resetAddState={resetAddState}
                    />
                ))}
                {!viewLists ? <List 
                    editName={editName}
                    viewLists={viewLists}
                    setEditName={setEditName}
                    updateList={updateList}
                    listName={listName}
                    setListName={setListName}
                    lists={lists}
                    setLists={setLists}
                    removeItem={removeItem}
                    addNewItem={addNewItem}
                    viewEditItem={viewEditItem}
                    setViewEditItem={setViewEditItem}
                    viewRecipes={viewRecipes}
                    setViewRecipes={setViewRecipes}
                    recipes={recipes}
                    setRecipes={setRecipes}
                    resetAddState={resetAddState}
                    addNewRecipe={addNewRecipe}
                    editRecipe={editRecipe}
                    setEditRecipe={setEditRecipe}
                    removeRecipe={removeRecipe}
                /> : ""}
            </div>
        </div>
    )
}