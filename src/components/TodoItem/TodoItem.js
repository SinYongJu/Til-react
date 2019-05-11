import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

/*
    비구조화 단축키 rsc 

    구조화 rcc 

    구조화는 성능 최적화시 라이프 사이클을 사용을 위해서 

*/ 

class TodoItem extends Component {
    render() {
        
        
        const { done, children, onToggle, onRemove} = this.props;



        return (
            <div 
                className={cx('todo-item')} 
                onClick={onToggle}>
                    <input className={cx('tick')} type="checkbox" 
                           checked={done} readOnly ></input>
                    <div className={cx('text', {done})}>{children}
                    </div>
                    <button className={cx('delete')} type="button" 
                        onClick={(e)=> {
                        onRemove();
                        e.stopPropagation();
                    }}>지우기</button>
            </div>
        )
    }
}

export default TodoItem;