import React, { useState } from 'react';
import { generateId } from '../../utilities';
import imgPlaceholder from '../../spagetti.jpg';

export const AddRecipe = (props) => {
    const [recipeName, setRecipeName] = useState('');

    const handleChange = (event) => {
        setRecipeName(event.target.value);
    }

    const handleLoadFile = function(event) {
        const image = document.getElementById('output');
        const uploadedImage = URL.createObjectURL(event.target.files[0]);
        console.log(uploadedImage);
        props.setRecipeImg(uploadedImage);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipe = {
            id: generateId().toString(), 
            name: recipeName,
            img: props.recipeImg, 
            items: [],
            instructions: "Recipe Instructions"
        };
        props.addNewRecipe(recipe);
        props.setShowAddRecipe(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="add-recipe-name">
                <label className="add-recipe-lable" htmlFor="recipe">Recipe</label>
                <input
                    id="recipe"         
                    type="text"
                    aria-label="recipe name"
                    placeholder="Name"
                    value={recipeName}
                    onChange={handleChange} 
                    name="Recipe Name"
                    required
                ></input>
            </div>
            <br/>
            <label htmlFor="file">
                <div className="addImg">Upload Image</div>
                <img id="output" width="200" src={imgPlaceholder} alt="upload"/>
            </label>
            <input type="file" accept="image/*" name="image" id="file" style={{display: "none"}} onChange={handleLoadFile}></input>
            <br/>
            <button className="button add-recipe-button" type="submit" value="Add">Add</button>
        </form>
    )
}