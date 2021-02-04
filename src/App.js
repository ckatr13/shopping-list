import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ShoppingList } from './components/shopping-lists/shopping-list';
import { ShoppingListForm } from './components/shopping-lists/shopping-list-form';
// import { render } from '@testing-library/react';



const App = () =>  {
  const [lists, setLists] = useState([
    {
      id: 1,
      name: 'Shopping List',

    },
  ]);

  const addList = (list) => {
    setLists((prev) => [
      list, ...prev
    ]);
  };

  const removeList = (listIdToRemove) => {
    setLists((prev) => 
      lists.filter((list) => list.id !== listIdToRemove)
    );
  };

  console.log(lists);

    return (
      <div className="App">
        <nav>
          <img src={logo} className="logo" alt="logo" />
          <div className="hamburger-menu">&#9776;</div>
        </nav>
        <div className="list-container">
          <h1>My Shopping Lists</h1>
          <ShoppingListForm addList={addList} />
            {lists.map((list) => (
              <ShoppingList key={list.id} list={list} removeList={removeList} />
            ))}
        </div>
      </div>
    );
}

export default App;
