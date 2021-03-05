import React from 'react';
import { AddItem } from '../add-item/add-item';
import imgPlaceholder from '../../spagetti.jpg';
import trash from '../../trash.png';

export const EditRecipe = (props) => {
    const {recipe, setViewEditItem, addNewItem, listName, recipes, setRecipes, instructions, setInstructions, recipeImg, setRecipeImg} = props;

    const removeRecipeItem = (itemIdToRemove) => {
        recipes.map(recipe => {
            return recipe.items.map(item => {
                const newList = recipe.items.filter( 
                    (item) => (item.id.toString()) !== itemIdToRemove);
                    return recipe.items = newList;
            })
        })
        setRecipes(prev => [
            ...prev
        ])
    }

    const handleRemove = (event) => {
        let id = event.target.id;
        console.log(id);
        removeRecipeItem(id);
    };

    const handleInstructionsChange = (event) => {
        setInstructions(event.target.value);
    }

    const recipeId = recipe.id;

    const handleSubmit = (event) => {
        event.preventDefault(); 
        recipes.map(recipe => {
            if(recipeId === recipe.id) {
                return recipe.instructions = instructions;
            }
            return "";
        });
        setRecipes(prev => [
            ...prev
        ])
    }

    const handleLoadFile = (event) => {
        const image = document.getElementById('output2');
        const uploadedImage = URL.createObjectURL(event.target.files[0]);
        image.src = uploadedImage;
        setRecipeImg(uploadedImage);
    };

    const handleImgSubmit = (event) => {
        event.preventDefault();
        recipes.map(recipe => {
            if(recipe.id === recipeId) {
                return recipe.img = recipeImg;
            }
            return "";
        })
        setRecipes(prev => [...prev]);
    }

    return (
        <div>
            <div id={recipe.id + "edit-recipe"} style={{display: "none"}}>
                <AddItem 
                    recipe={recipe} 
                    setViewEditItem={setViewEditItem} 
                    addNewItem={addNewItem}     
                    listName={listName} 
                    recipes={recipes}
                    setRecipes={setRecipes}/> 
                <form onSubmit={handleImgSubmit}>
                    <label htmlFor="file2">
                        <div className="addImg">Upload Image</div>
                        <img id="output2" width="200" src={imgPlaceholder} alt="upload"/>
                    </label>
                    <input type="file" accept="image/*" name="image" id="file2" style={{display: "none"}} onChange={handleLoadFile}></input>
                    <br/>
                    <button className="button add-recipe-button" type="submit" value="Add">Submit</button>
                </form>
                <div className="recipe-img-container">
                    <img className="recipe-img" src={recipe.img} alt="recipe"></img>
                </div>
                    <div className="category recipe-name">
                        <div className="category-side">
                            <h2 className="recipe-name-h2">{recipe.name}</h2>
                        </div>
                    </div>
                    <ul className="grocery-list" id={recipe.id + "-list"}>
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
                                                    className="remove-item"
                                                    aria-label="Remove list"
                                                >
                                                    <img className="trash-2" src={trash} id={item.id} onClick={handleRemove} />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                        })}
                                <li>
                                    <div className="instructions-label">Recipe Instructions:</div>
                                    <div className="instructions inst-2">
                                        <form onSubmit={handleSubmit}>
                                            <textarea id="instructions" name="instructions" rows="8" cols="50" style={{width: "calc(100% - 20px)"}} value={instructions} onChange={handleInstructionsChange}></textarea>
                                            <br/>
                                            <button className="button add-recipe-button" type="submit" value="Add">Submit</button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
            </div>
        </div>
    )
}