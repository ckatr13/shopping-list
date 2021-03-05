import React, {useState} from 'react';
import './recipes.css';
import { isEmpty, generateId } from '../../utilities';
import pencil from '../../edit-white.png';
import { AddRecipe } from './add-recipe';
import { EditRecipe } from './edit-recipe';
import recipePhoto from '../../recipe-img.jpg';
import trash from '../../white-trash.png';
import downArrow from '../../down-white-arrow.png';
import upArrow from '../../up-white-arrow.png';
import { Instructions } from './instructions';


export const Recipes = (props) => {
    const { recipes, addRecipeItem, listName, lists, setLists, setRecipes, removeItem, 
        addNewRecipe, setViewEditItem, addNewItem, editRecipe, setEditRecipe, removeRecipe } = props;

    const [showAddRecipe, setShowAddRecipe] = useState(false);
    const [instructions, setInstructions] = useState('Recipe Instructions');
    const [recipeImg, setRecipeImg] = useState(recipePhoto);

    const handleAddRecipe = (amount, name, recipe, category, value, event) => {
        const item = {id: generateId(), item: name, amount: amount, recipe: recipe, addState: true, checked: false, recipeItemId: value}

            lists.map(list => {
                if(listName === list.name) {
                    return recipes.map(recipe => {
                        return recipe.items.map(it => {
                            if((event.target.id) === it.id) {
                                if(it.addState) {
                                    addRecipeItem(item, category, listName);
                                    return it.addState = false;
                                } else if (!it.addState) {
                                    return it.addState = true;
                                }
                                return "";
                            }
                            return "";
                        })
                    })
                }
                return "";
            });

            lists.map(list => {
                if (listName === list.name) {
                    list.recipeState = true;
                    return list.groceries.map(category => {
                        return category.items.map(item => {
                            if(event.target.id === item.recipeItemId) {
                                if(item.addState) {
                                    return item.addState = false;
                                } else if (!item.addState) {
                                    removeItem(item.id);
                                    return item.addState = true;
                                }
                            }
                            return item.addState;
                        })
                    });
                }
                return list.recipeState = false;
            })

            setRecipes((prev) => [
                ...prev 
            ]);

            setLists((prev) => [
                ...prev 
              ]);
            console.log(recipes);
    }

        useState(() => {
            setTimeout(() => {
                setRecipes((prev) => [
                    ...prev 
                ]);
            }, 0)
        })

    const handleReduce = (event) => {
        recipes.map(recipe => {
            if(recipe.name === "Other") {
                return "";
            } else {
                const list = document.getElementById(recipe.id + "-list");
                const downArrow = document.getElementById(recipe.id);
                const upArrow = document.getElementById(recipe.id + "2");
                if (recipe.id.toString() === event.target.id || recipe.id.toString() + "2" === event.target.id) {
                    if(list.style.display === "none") {
                        upArrow.style.display = "block";
                        downArrow.style.display = "none";
                        return list.style.display = "block";
                    } else {
                        upArrow.style.display = "none";
                        downArrow.style.display = "block";
                        return list.style.display = "none";
                    }
                }
                return "";
            }
        })
    }

    const handleAddNewRecipe = () => {
        if (showAddRecipe) {
            setShowAddRecipe(false);
        } else {
            setShowAddRecipe(true);
        }
    }

    const handleEditRecipe = (event) => {
        setEditRecipe(true)
        setShowAddRecipe(false);
        recipes.map(recipe => {
            if(recipe.name === "Other") {
                return "";
            } else {
                const ing = document.getElementById(recipe.id + "edit-recipe");
                if ((recipe.id.toString() + "edit") === event.target.id) {
                    setInstructions(recipe.instructions);
                    if(ing.style.display === "none") {
                        return ing.style.display = "block";
                    } else  {
                        return ing.style.display = "none";
                    }
                }
                return "";
            }
        })
    }

    const handleRemove = (event) => {
        removeRecipe(event.target.id);
    }



    

    return (
        <div>
            <div style={{textAlign: "left"}}>
                {!editRecipe ? <button id="add-recipe-button" onClick={handleAddNewRecipe}>{showAddRecipe ? "Add Recipe" : "Add Recipe"}</button> : ""}
            </div>
            {showAddRecipe ? <AddRecipe addNewRecipe={addNewRecipe} setShowAddRecipe={setShowAddRecipe} instructions={instructions} setInstructions={setInstructions} recipeImg={recipeImg} setRecipeImg={setRecipeImg} /> : ""}
            {recipes.map((recipe) => {
                if(recipe.name === "Other") {
                    return "";
                } 
                return <div key={recipe.id}>
                            {!editRecipe ? <div>
                                <div className="recipe-img-container">
                                    <img className="recipe-img" src={recipe.img} alt="recipe"></img>
                                </div>
                            <div className="category recipe-name">
                                <div className="category-side">
                                    <h2 className="recipe-name-h2">{recipe.name}</h2>
                                </div>
                                <div className="category-side">
                                    <button className="down-button">
                                        <img className="down-button" id={recipe.id} onClick={handleReduce} src={downArrow} style={{display: "block"}} />
                                        <img className="down-button" id={recipe.id + "2"} onClick={handleReduce} src={upArrow} style={{display: "none"}} />
                                    </button>
                                    <button 
                                        className="edit"
                                        aria-label="Edit list"
                                        onClick={handleEditRecipe}
                                    >
                                        <img className="pencil" id={recipe.id + "edit"} src={pencil} alt="edit"></img>
                                    </button>
                                    <button 
                                        className="remove remove-recipe"
                                        aria-label="Remove list"
                                    >
                                        <img className="trash" src={trash} id={recipe.id + "a"} onClick={handleRemove} />
                                    </button>
                                </div>
                            </div>
                            <ul className="grocery-list" id={recipe.id + "-list"} style={{display: "none"}}>
                                {recipe.items.map((item, i) => {
                                    return <li key={item.id} className="grocery-item">
                                                <div className="list-group">
                                                    <div className="amount-container">
                                                        <p className="p">{item.amount}</p>
                                                    </div>
                                                    <div className="item-container">
                                                        <p>{item.name}</p>
                                                    </div>
                                                </div>
                                                <div className="recipe-item-edit">
                                                    <div className="edit-item-container">
                                                        <button 
                                                            className="add-recipe-item"
                                                            aria-label="Remove list"
                                                            id={item.id}
                                                            value={item.id}
                                                            style={{ backgroundColor: !item.addState ? "#8ef187" : "unset" }}
                                                            onClick={(event) => handleAddRecipe(item.amount, item.name, item.recipe, item.category, item.id, event)}
                                                        >
                                                        {lists.map(list => {
                                                            return list.groceries.map((category, i) => {
                                                                if(!isEmpty(category.items)) {
                                                                    return category.items.map(it => {
                                                                        if (it.recipeItemId === item.id && !it.addState && list.name === listName) {
                                                                            return "-"
                                                                        } 
                                                                        return ""
                                                                    })
                                                                }
                                                            return ""
                                                            })
                                                        })}
                                                        {item.addState ? "+" : ""}
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        })
                                }
                                <li>
                                    <div className="instructions-label">Recipe Instructions:</div>
                                    <div className="instructions">
                                        <Instructions recipeId={recipe.id} recipeInstructions={recipe.instructions} />
                                    </div>
                                </li>
                            </ul>
                            </div> : ""}
                            <EditRecipe 
                                recipe={recipe} 
                                setViewEditItem={setViewEditItem} 
                                addNewItem={addNewItem} 
                                listName={listName}
                                recipes={recipes}
                                setRecipes={setRecipes}
                                instructions={instructions} 
                                setInstructions={setInstructions}
                                recipeImg={recipeImg}
                                setRecipeImg={setRecipeImg} />
                        </div>       
            })}
        </div>
    )
}