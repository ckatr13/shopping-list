import React, { useState } from 'react';
import './list.css';
import { ListNameForm } from './list-name-form';
import { Groceries } from './groceries';
import { AddItem } from '../add-item/add-item';
import { GroceriesByRecipe } from './groceries-by-recipe';
import { Recipes } from '../recipes/recipes';
import { isEmpty } from '../../utilities';

export const List = (props) => {
    const { 
        editName, 
        viewLists, 
        setEditName, 
        updateList, 
        listName, 
        setListName, 
        lists, 
        setLists,
        removeItem, 
        addNewItem, 
        viewEditItem, 
        setViewEditItem,
        viewRecipes,
        setViewRecipes,
        recipes,
        setRecipes,
        resetAddState,
        addNewRecipe,
        editRecipe,
        setEditRecipe,
        removeRecipe} = props;

    const [ viewByRecipe, setViewByRecipe ] = useState(false);

    const addRecipeItem = (item, category, list) => {
        lists.map((li) => {
          if(li.name === list) {
            return li.groceries.forEach((obj) => {
                if(obj.category === category) {
                    if(isEmpty(obj.items)) {
                        obj.items.push(item);
                    } else {
                        if(!obj.items.some(it => it.recipeItemId === item.id)) {
                            obj.items.push(item);
                        } 
                    }
                }
            }) 
          }
          return "";
        })
        setLists((prev) => [
            ...prev 
          ]);
    }

    const handleClick = () => {
        return setViewEditItem(true);
    }

    const handleRecipeClick = () => {
        resetAddState()
        setEditName(false);
        return setViewRecipes(true);
    };

    const handleRemove = (event) => {
        let id = event.target.id;
        removeItem(id);
    };

    const toggleViewByRecipe = () => {
        setViewByRecipe(true);
    }

    const toggleViewByCategory = () => {
        setViewByRecipe(false);
    }

    const handleCheck = (event) => {
        lists.map(list => {
          return list.groceries.map(category => {
            return category.items.map(item => {
              if((item.id + "check") === event.target.id) {
                if(!item.checked) {
                  return item.checked = true;
                } else {
                  return item.checked = false;
                }
              }
              return "";
            })
          })
        })
        return setLists(prev => [...prev]);
    }

    const handleClickCheck = () => {
        setLists(prev => [...prev])
    }

    return (
        <div>
            <div className="spacing"></div>
            <ListNameForm                 
                editName={editName}
                setEditName={setEditName}
                updateList={updateList}
                listName={listName}
                setListName={setListName}
                lists={lists}/>
            
            {!viewEditItem && !viewRecipes ? (
                <div>
                    <button className="add-item item1" onClick={handleClick}>+ Add Item</button>
                    <button className="add-item item2" onClick={handleRecipeClick}>Recipes</button>
                    <br></br>
                    <button className="view-category" id="view-category" style={{color: !viewByRecipe ? "#D0F383" : "rgb(219, 251, 244)"}} onClick={toggleViewByCategory}>View By Category</button>
                    <button className="view-category" id="view-by-recipe" style={{color: viewByRecipe ? "#D0F383" : "rgb(219, 251, 244)"}} onClick={toggleViewByRecipe}>View By Recipe</button>
                    {!viewByRecipe && !viewRecipes ? <Groceries
                        viewLists={viewLists}
                        listName={listName}
                        lists={lists}
                        handleRemove={handleRemove}
                        handleCheck={handleCheck}
                        handleClickCheck={handleClickCheck} /> : ""}
                    {viewByRecipe ? <GroceriesByRecipe 
                        lists={lists}
                        handleRemove={handleRemove}
                        recipes={recipes}
                        listName={listName}
                        handleCheck={handleCheck}
                        setLists={setLists}
                        handleClickCheck={handleClickCheck} /> : ""}
                </div>) : ""}

            {viewEditItem ? <AddItem setViewEditItem={setViewEditItem} listName={listName} addNewItem={addNewItem} /> : ""} 

            {viewRecipes ? <Recipes
                recipes={recipes}
                addRecipeItem={addRecipeItem}
                listName={listName}
                lists={lists}
                setLists={setLists}
                setRecipes={setRecipes}
                removeItem={removeItem}
                addNewRecipe={addNewRecipe}
                setViewEditItem={setViewEditItem} 
                addNewItem={addNewItem}
                editRecipe={editRecipe}
                setEditRecipe={setEditRecipe}
                removeRecipe={removeRecipe} />  : ""}

        </div>
    )
}

export default List;