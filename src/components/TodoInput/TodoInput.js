import React, { Component } from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
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
            <div className={cx('todo-input')}>
                <input 
                    onChange = {onChange} value={value} onKeyPress = {handleKeyPress}
                ></input>                
                <button type="button" className={cx('add-button')} onClick={onInsert} >추가</button>
            </div>
        );
}

export default TodoInput;