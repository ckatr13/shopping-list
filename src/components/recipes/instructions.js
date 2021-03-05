import React from 'react';

export const Instructions = (props) => {

    const findBreak = (string) => {
        const input = string;
        const regex = /\r?\n|\r/g;
        const regex2 = /\<br>/gm;
        const found = input.match(regex);
        const found2 = input.match(regex2);
        const line = <br/>;
        let result, indices = [];  
        let newString = [];
        let lastString = [];
        if(found) {
            while ( (result = regex.exec(string)) ) {
                indices.push(result.index);
                if(found) {
                    newString = indices.map((item, index) => {
                        return [string.slice(indices[index - 1], item), line];
                    })
                    lastString = string.slice(indices[indices.length - 1], string.length)
                }
            }
            return [newString, lastString];
        }
        if(found2) {
            while ( (result = regex2.exec(string)) ) {
                indices.push(result.index);
                if(found2) {
                    newString = indices.map((item, index) => {
                        return [string.slice(indices[index - 1] + 4, item), line];
                    })
                    lastString = string.slice(indices[indices.length - 1] + 4, string.length)
                };
            }
            return [newString, lastString];
        }
    };

    return (
        <div style={{textAlign: "left"}} id={props.recipeId + "b"}>
            {findBreak(props.recipeInstructions)}
        </div>
    )
}