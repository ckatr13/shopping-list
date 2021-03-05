import React, { useState } from 'react';
import './list.css';

export const ListNameForm = (props) => {
    const { editName, setEditName, updateList, listName, setListName, lists } = props;
    const [text, setText] = useState('');


    const handleTextChange = (event) => {
      setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
                lists.map((list) => {
                    if(list.name === listName) {
                        setListName(text);
                        setEditName(false);
                        return updateList(list.id, text);
                    }
                    return ""
                })
            }
            setText('');
        }
    }

    return (
        <div className="edit-list-name-form-container" style={{ display: editName ? "block" : "none" }}>
            <form className="edit-list-name-form">
                <input 
                    id="update-title"         
                    type="text"
                    aria-label="Change Shopping List Name"
                    placeholder="Change List Name"
                    value={text}
                    onChange={handleTextChange}
                    name="body" 
                    required ></input>
                <button className="edit-list-name-button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}