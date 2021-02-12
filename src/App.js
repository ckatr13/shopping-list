import React, {useState} from 'react';
import logo from './logo.svg';
import back from './back-arrow.png';
import pencil from './pencil-60-119100.webp';
import './App.css';
import { ShoppingList } from './components/shopping-lists/shopping-list';
import { ShoppingListForm } from './components/shopping-lists/shopping-list-form';
import { List } from './components/single-list-view/list';
// import { generateId } from './utilities';
// import { render } from '@testing-library/react';

const App = () =>  {
  const [lists, setLists] = useState([]);
    // {
    //   id: generateId(),
    //   name: "Shopping List",
    //   groceries: [        
    //       {
    //           id: generateId(),
    //           category: 'Produce',
    //           items: [{id: generateId(), item: "Apples", amount: "4", recipe: "Pie"}, 
    //                   {id: generateId(), item: "Broccoli", amount: "1 head", recipe: "Soup"}, 
    //                   {id: generateId(), item: "Spinach", amount: "1 box", recipe: "None"}],
    //       }, 
    //       {
    //           id: generateId(),
    //           category: 'Dairy',
    //           items: [{id: generateId(), item: "Milk", amount: "1 gallon"}, 
    //                   {id: generateId(), item: "Cheese", amount: "1 pack"}],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Beverages',
    //           items: [{id: generateId(), item: "Juice", amount: "2 liters"}, 
    //                   {id: generateId(), item: "Bottled Water", amount: "1 case"}],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Deli',
    //           items: [{id: generateId(), item: "Ham", amount: "1 pound"}, 
    //                   {id: generateId(), item: "Sushi", amount: "1 dozen"}],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Bakery',
    //           items: [{id: generateId(), item: "Bread", amount: "3 loafs"}],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Pantry',
    //           items: [{id: generateId(), item: "Crackers", amount: "1 box"}, 
    //                   {id: generateId(), item: "Cereal", amount: "1 box"}, 
    //                   {id: generateId(), item: "Coffee", amount: "1 bag"}],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Frozen',
    //           items: [{id: generateId(), item: "Ice Cream", amount: "2 pints"}, 
    //                   {id: generateId(), item: "Frozen Peas", amount: "1 bag"} ],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Meat',
    //           items: [{}],
    //       },
    //       {
    //           id: generateId(),
    //           category: 'Other',
    //           items: [{id: generateId(), item: "Shampoo", amount: "1 bottle"}, 
    //                   {id: generateId(), item: "Toilet Paper", amount: "1 bundle"}],
    //       },
      // ]
  // }, 
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



  const [viewLists, setViewLists] = useState(true);
  const [listName, setListName] = useState("");
  const [editName, setEditName] = useState(false);

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


  const removeItem = (itemIdToRemove) => {
    lists.map((list) => {
      return list.groceries.forEach((category) => {
        category.items.forEach((item) => {
          if (item.id === itemIdToRemove) {
            const newList = category.items.filter( 
              (item) => item.id !== itemIdToRemove);
            category.items = newList;
          }
        })
      })
    })
    setLists((prev) => 
      [...prev]
    )
  }

  const addNewItem = (item, category, list) => {
    lists.map((li) => {
      if(li.name === list) {
        return li.groceries.forEach((obj) => {
          if(obj.category.toLowerCase() === category) {
            obj.items.push(item);
          }
        })
      }
      return ""; 
    })
    setLists((prev) => [
      ...prev 
    ]);
  }

  const updateList = (id, text) => {
    setLists(lists.map((list) => {
        if (list.id === id)  {
            return {...list, name: text}
        }
        return list;
    }));
}

  const handleView = () => {
    if (!viewLists && !viewEditItem) {
      return setViewLists(true);
    } else if (viewEditItem) {
      return setViewEditItem(false);
    }
 };

 const [ viewEditItem, setViewEditItem ] = useState(false);

  const handleClick = () => {
    if (!editName) {
      return setEditName(true);
    } else {
      return setEditName(false);
    }
  }

  console.log(lists);

    return (
      <div className="App">
        <nav>
          <button className="back-button" onClick={handleView}>
            <img src={back} className="back" alt="back button"></img>
          </button>
          <img src={logo} className="logo" alt="logo" />
          <div className="hamburger-menu">&#9776;</div>
        </nav>
        <div className="list-container">
        {lists.map((list) => {
          if(list.name === listName && !viewLists) {
            return (
              <h1 key={list.id}>{ list.name }</h1>
            )
          }
          return ""
        })}
        {viewLists ? <h1>My Shopping Lists</h1> : ""}
          <button 
            className="edit-button" 
            style={{ display: viewLists ? "none" : "inline" }}
            onClick={handleClick}
          >
            <img className="pencil" src={pencil} alt="edit"></img>
          </button>
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
                removeItem={removeItem}
                addNewItem={addNewItem}
                viewEditItem={viewEditItem}
                setViewEditItem={setViewEditItem}
            /> : ""}
        </div>
      </div>
    );
}

export default App;
