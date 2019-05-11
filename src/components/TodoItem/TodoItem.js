import React, { Component } from 'react';

/*
    비구조화 단축키 rsc 

    구조화 rcc 

    구조화는 성능 최적화시 라이프 사이클을 사용을 위해서 

*/ 

class TodoItem extends Component {
    render() {

        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div onClick={onToggle}>
                <input type="checkbox" checked={done} readOnly ></input>
                <div className={done}> {children} </div>
                <button type="button" onClick={onRemove}>지우기</button>
            </div>
        )
    }
}

export default TodoItem;