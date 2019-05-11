import React, { Component } from 'react';
import TodoItem from '../TodoItem'


class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem>리엑트 공부하기</TodoItem>
                <TodoItem>scss 꼭 달기</TodoItem>
            </div>
        );
    }
}



export default TodoList;