import React, { useState } from 'react';
import './list.css';
import { ListNameForm } from './list-name-form';
import { Groceries } from './groceries';

export const List = (props) => {
    const { editName, viewLists, setEditName, updateList, listName, setListName, lists, removeItem } = props;

    const { viewEditItem, setViewEditItem } = useState(false);

    return (
        <div>
            <ListNameForm                 
                editName={editName}
                viewLists={viewLists}
                setEditName={setEditName}
                updateList={updateList}
                listName={listName}
                setListName={setListName}
                lists={lists}/>
            
            {!viewLists ? <button className="add-item">+ Add Item</button> : ""}

            <Groceries
                viewLists={viewLists}
                listName={listName}
                lists={lists}
                removeItem={removeItem} /> 
        </div>
    )
}

export default List;