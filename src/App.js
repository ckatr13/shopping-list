import React, { useState } from 'react';
import beans from './black-beans.webp';
import pizza from './pizza.webp';
import './App.css';
import { generateId } from './utilities';
import { ShoppingLists } from './components/shopping-lists/shopping-lists';
// import { render } from '@testing-library/react';

const App = () =>  {
  const [lists, setLists] = useState([]);
  // {
  //     id: generateId(),
  //     name: "list",
  //     groceries: [        
  //         {
  //             id: generateId(),
  //             category: 'Produce',
  //             items: [{id: generateId(), item: "Apples", amount: "4"}, 
  //                     {id: generateId(), item: "Broccoli", amount: "1 head"}, 
  //                     {id: generateId(), item: "Spinach", amount: "1 box"}],
  //         }, 
  //     ]
  // }
  lists.map((list) => {
    return list.groceries.map((category) => {
        return category.items.sort((a, b) => (a.item > b.item) ? 1 : -1);
    })
  })

  const addList = (list) => {
    setLists((prev) => [
      ...prev, list
    ]);
  };

  const removeList = (listIdToRemove) => {
    setLists(() => 
      lists.filter((list) => list.id !== listIdToRemove)
    );
  };

  const updateList = (id, text) => {
    setLists(lists.map((list) => {
        if (list.id === id)  {
            return {...list, name: text}
        }
        return list;
    }));
  }

  const removeItem = (itemIdToRemove) => {
    lists.map((list) => {
      if(list.name === listName) {
        return list.groceries.forEach((category) => {
          category.items.forEach((item) => {
            if ((item.id.toString() + "a") === itemIdToRemove) {
              const newList = category.items.filter( 
                (item) => (item.id.toString() + "a") !== itemIdToRemove);
              category.items = newList;
            } 
            else if ((item.id.toString() + "b") === itemIdToRemove) {
              const newList2 = category.items.filter( 
                (item) => (item.id.toString() + "b") !== itemIdToRemove);
              category.items = newList2;
            }
            else if (item.id === itemIdToRemove) {
              const newList2 = category.items.filter( 
                (item) => item.id !== itemIdToRemove);
              category.items = newList2;
            }
          })
        })
      }
      return "";
    })
    setLists((prev) => 
      [...prev]
    )
}

  const [viewLists, setViewLists] = useState(true);
  const [listName, setListName] = useState("");
  const [editName, setEditName] = useState(false);
  const [viewRecipes, setViewRecipes] = useState(false);
  const [editRecipe, setEditRecipe] = useState(false);
  const [viewEditItem, setViewEditItem] = useState(false);
  const [recipes, setRecipes] = useState([
    {id: generateId(), name: 'Other', items: []}, 
    {id: generateId(), name: 'Beans and Rice', img: beans, items: [
        {id: generateId(), category: "Pantry", name: "Beans", amount: "1 Can", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Pantry", name: "Rice", amount: "1 Bag", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Produce", name: "Onion", amount: "1", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Produce", name: "Green Pepper", amount: "1", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Produce", name: "Tomatoes", amount: "4", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Produce", name: "Cilantro", amount: "2 tbs", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Produce", name: "Limes", amount: "2", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Dairy", name: "Sour Cream", amount: "1", recipe: 'Beans and Rice', addState: true},
        {id: generateId(), category: "Dairy", name: "Cheese", amount: "1", recipe: 'Beans and Rice', addState: true},
      ], instructions: "Step 1. <br> In a stockpot over medium-high heat, heat the oil. Add the onion and garlic and saute for 4 minutes. Add the rice and saute for 2 minutes. <br> <br> Step 2. <br> Add the vegetable broth, bring to a boil, cover and lower the heat and cook for 20 minutes. Add the spices and black beans."},
      {id: generateId(), name: 'Pizza', img: pizza, items: [
        {id: generateId(), category: "Pantry", name: "Flour", amount: "4 cups", recipe: 'Pizza', addState: true},
        {id: generateId(), category: "Pantry", name: "Yeast", amount: "1 pkg", recipe: 'Pizza', addState: true},
        {id: generateId(), category: "Pantry", name: "Crushed Tomatoes", amount: "1 can", recipe: 'Pizza', addState: true},
        {id: generateId(), category: "Produce", name: "Green Pepper", amount: "1", recipe: 'Pizza', addState: true},
        {id: generateId(), category: "Produce", name: "Mushrooms", amount: "4", recipe: 'Pizza', addState: true},
        {id: generateId(), category: "Produce", name: "Basil", amount: "2 tbs", recipe: 'Pizza', addState: true},
        {id: generateId(), category: "Dairy", name: "Cheese", amount: "1 Bag", recipe: 'Pizza', addState: true},
      ], instructions: "Step 1. <br> In a stockpot over medium-high heat, heat the oil. Add the onion and garlic and saute for 4 minutes. Add the rice and saute for 2 minutes. <br> <br> Step 2. <br> Add the vegetable broth, bring to a boil, cover and lower the heat and cook for 20 minutes. Add the spices and black beans."}
  ]);

  recipes.sort((a, b) => {
    if(a.name === b.name) return 0;
    if (a.name === 'Other') return -1;
    if (b.name === 'Other') return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })

  const addNewRecipe = (recipe) => {
    setRecipes((prev) => [
      ...prev, recipe
    ]);
  }

  const removeRecipe = (recipeIdToRemove) => {
    const newRecipes = recipes.filter(recipe => (recipe.id.toString() + "a") !== recipeIdToRemove);
    setRecipes(newRecipes);
  }

  const resetAddState = () => {
    setTimeout(() => {
      const name = document.getElementById("list-name").innerHTML;
      recipes.map((recipe, r) => {
        return recipe.items.forEach((item, ide) => {
            item.id = item.id.toString();
                let match;
                lists.map((list, ind) => {
                    if (list.name === name) {
                        return list.groceries.forEach(category => {
                            if (category.items.some(it => {
                                return it.recipeItemId === item.id || it.id === item.id;
                            })) {
                                return match = true
                            }
                        })
                    }
                    return "";
                });
                if (match) {
                    return item.addState = false; 
                }
                else {
                    return item.addState = true; 
                }
        })
    })
    setRecipes((prev) => [
        ...prev 
    ]);
    }, 0);
  } 

  const addNewItem = (item, category, list) => {
    lists.map((li) => {
      if(li.name === list) {
        return li.groceries.forEach((obj) => {
          if(obj.category === category) {
            obj.items.push(item);
            recipes.map(recipe => {
              if (recipe.name === "Other") {
                const i = {id: item.id, category: category, name: item.item, amount: item.amount, recipe: item.recipe, addState: false}
                return recipe.items.push(i);
              }
              return "";
            })
          }
        })
      }
      return ""; 
    })
    setLists((prev) => [
      ...prev 
    ]);

    setRecipes(prev => [...prev]);
}

  console.log(lists);
  console.log(recipes);

    return (
      <ShoppingLists
        lists={lists} 
        listName={listName}
        viewLists={viewLists} 
        viewRecipes={viewRecipes} 
        viewEditItem={viewEditItem} 
        editRecipe={editRecipe} 
        setViewLists={setViewLists}
        setViewEditItem={setViewEditItem} 
        setViewRecipes={setViewRecipes} 
        recipes={recipes} 
        setEditRecipe={setEditRecipe} 
        editName={editName} 
        setEditName={setEditName} 
        setLists={setLists} 
        setListName={setListName} 
        setRecipes={setRecipes}
        addList={addList}
        removeList={removeList}
        resetAddState={resetAddState}
        updateList={updateList}
        addNewItem={addNewItem}
        removeItem={removeItem}
        addNewRecipe={addNewRecipe}
        removeRecipe={removeRecipe} />
    );
}

export default App;
