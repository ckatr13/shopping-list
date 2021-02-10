import React, {useState} from 'react';
import logo from './logo.svg';
import back from './back-arrow.png';
import pencil from './pencil-60-119100.webp';
import './App.css';
import { ShoppingList } from './components/shopping-lists/shopping-list';
import { ShoppingListForm } from './components/shopping-lists/shopping-list-form';
import { List } from './components/single-list-view/list';
import { generateId } from './utilities';
// import { render } from '@testing-library/react';

const App = () =>  {
  const [lists, setLists] = useState([
    {
      id: generateId(),
      name: "Shopping List",
      groceries: [        
          {
              id: generateId(),
              category: 'Produce',
              items: [{id: generateId(), item: "Apples", amount: "4"}, 
                      {id: generateId(), item: "Broccoli", amount: "1 head"}, 
                      {id: generateId(), item: "Spinach", amount: "1 box"}],
          }, 
          {
              id: generateId(),
              category: 'Dairy',
              items: [{id: generateId(), item: "Milk", amount: "1 gallon"}, 
                      {id: generateId(), item: "Cheese", amount: "1 pack"}],
          },
          {
              id: generateId(),
              category: 'Beverages',
              items: [{id: generateId(), item: "Juice", amount: "2 liters"}, 
                      {id: generateId(), item: "Bottled Water", amount: "1 case"}],
          },
          {
              id: generateId(),
              category: 'Deli',
              items: [{id: generateId(), item: "Ham", amount: "1 pound"}, 
                      {id: generateId(), item: "Sushi", amount: "1 dozen"}],
          },
          {
              id: generateId(),
              category: 'Bakery',
              items: [{id: generateId(), item: "Bread", amount: "3 loafs"}],
          },
          {
              id: generateId(),
              category: 'Pantry',
              items: [{id: generateId(), item: "Crackers", amount: "1 box"}, 
                      {id: generateId(), item: "Cereal", amount: "1 box"}, 
                      {id: generateId(), item: "Coffee", amount: "1 bag"}],
          },
          {
              id: generateId(),
              category: 'Frozen',
              items: [{id: generateId(), item: "Ice Cream", amount: "2 pints"}, 
                      {id: generateId(), item: "Frozen Peas", amount: "1 bag"} ],
          },
          {
              id: generateId(),
              category: 'Meat',
              items: [{}],
          },
          {
              id: generateId(),
              category: 'Other',
              items: [{id: generateId(), item: "Shampoo", amount: "1 bottle"}, 
                      {id: generateId(), item: "Toilet Paper", amount: "1 bundle"}],
          },
      ]
  }, 
  {
      id: generateId(),
      name: "list",
      groceries: [        
          {
              id: generateId(),
              category: 'Produce',
              items: [{id: generateId(), item: "Apples", amount: "4"}, 
                      {id: generateId(), item: "Broccoli", amount: "1 head"}, 
                      {id: generateId(), item: "Spinach", amount: "1 box"}],
          }, 
      ]
  }
]);

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



  //     lists.forEach((list) => {
  //       if(list.name === listName) {
  //         list.groceries.forEach((category) => {
  //           category.items.forEach((item) => {
  //             if(item.id !== itemIdToRemove) {
  //               category.items.filter((item) => item.id !== itemIdToRemove)
  //               console.log(lists)
  //             }
  //           })
  //           // category.items.filter((item) => item.id !== itemIdToRemove)
  //         })
  //         console.log(lists)
  //       }
  //     })
  //   })
  // }

  // let itemNames = nestedObject.filter( 
  //   eachObj => eachObj.itemDetails.price === 1500)

  const updateList = (id, text) => {
    setLists(lists.map((list) => {
        if (list.id === id)  {
            return {...list, name: text}
        }
        return list;
    }));
}

  const handleView = () => {
    return setViewLists(true);
 };

  const handleClick = () => {
    if (!editName) {
      return setEditName(true);
    } else {
      return setEditName(false);
    }
  }

  console.log(lists);
  // console.log(listName);
  

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
            <List 
                editName={editName}
                viewLists={viewLists}
                setEditName={setEditName}
                updateList={updateList}
                listName={listName}
                setListName={setListName}
                lists={lists}
                removeItem={removeItem}
            />
        </div>
      </div>
    );
}

export default App;
