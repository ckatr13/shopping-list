import React, {useState} from 'react';
import './shopping-lists.css';
import { generateId } from '../../utilities';

export const ShoppingListForm = (props) => {
    const { viewLists, lists } = props;
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const list = {
          id: generateId(),
          name: text,
          groceries: [        
            {id: generateId(), category: 'Produce', items: []}, 
            {id: generateId(), category: 'Dairy', items: []},
            {id: generateId(), category: 'Beverages', items: []},
            {id: generateId(), category: 'Pantry', items: []},
            {id: generateId(), category: 'Meat', items: []},
            {id: generateId(), category: 'Frozen', items: []},
            {id: generateId(), category: 'Deli', items: []},
            {id: generateId(), category: 'Bakery', items: []},
            {id: generateId(), category: 'Other', items: []},
          ]
        };
        if (text.length > 0) {
          let add = true;
          for (let i = 0; i < lists.length; i++) {
            if (text === lists[i].name) {
              alert("This name already exists!");
              add = false;
              setText('');
              return add
            } 
          }
          if(add) {
            props.addList(list);
          }
        }
        setText('');
      }

    return (
        <form 
            className="add-list-form" 
            style={{ display: viewLists ? "flex" : "none" }} 
            onSubmit={handleSubmit}
        >
          <div className="list-name-input">
            <label htmlFor="title"><p className="label">List Name</p></label>
            <input 
                id="title"         
                type="text"
                aria-label="Add Shopping List"
                placeholder="+ Add List Name"
                value={text}
                onChange={handleTextChange} 
                name="body" 
                required>
            </input>
          </div>
        <button className="button" type="submit" value="Add">+ New List</button>
      </form>
    )
}