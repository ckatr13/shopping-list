import React, {useState} from 'react';
import './shopping-lists.css';
import { generateId } from '../../utilities';

export const ShoppingListForm = (props) => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const list = {
          id: generateId(),
          name: text,
        };
        if (text.length > 0) {
          props.addList(list);
          setText('');
        }
      };

    return (
        <form className="add-list-form" onSubmit={handleSubmit}>
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
        <button className="button" type="submit" value="Add">Create New List</button>
      </form>
    )
}