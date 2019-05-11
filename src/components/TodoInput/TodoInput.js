import React, { Component } from 'react';


/*

    input과 버튼이 함께 있는 컴포 넌트

    value : input val
    onChange : input change Event
    onInsert : click addition button Event
*/

const TodoInput = ({value, onChange, onInsert}) => {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }
        return (
            <div>
                <input 
                    onChange = {onChange} value={value} onKeyPress = {handleKeyPress}
                ></input>                
                <button type="button" onClick={onInsert} >추가</button>
            </div>
        );
}

export default TodoInput;