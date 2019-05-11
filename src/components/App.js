import React,{ Component } from 'react';
import PageTemplate from  './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList'



class App extends Component {
  state = {
    input : '',
    todos : [
      { id : 0, text: '리액트 공부하기', done: true },
      { id : 1, text: '컴포넌트 스타일링 공부하기', done: false },
    ]
  }
  


  getId = () =>{
    const todos = this.state.todos;
    const length = todos.length;
    const getId = (todos[length-1].id > todos) ? (todos[length-1].id) : todos[length-1].id+1;
    return getId;
  }

  handleInsert = ()=>{
    const { todos, input } = this.state;

    // 새 데이터 객체 만들기
    const newTodo = {
      text : input,
      done : false,
      id : this.getId()

    }

    this.setState({
      todos : [ ...todos , newTodo ],
      input : '',

    })
  }

  handleChange = (e) =>{
    const {value} = e.target;
    this.setState({
      input : value 
    });
  }

  handleToggle = (id) => {

    console.log('handleToggle')
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done,
    }// 전개 연산자의 사용  

    
    // 전후 객체 복사
    // 고 사이에 변경 객체 넣기 
    this.setState({
      todos : [ ...todos.slice(0, index),
        toggled,
        ...todos.slice(index+1, todos.length)]
    })

  }

  handleRemove = (id)=>{
    console.log('handleRemove')
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos : [ 
        ...todos.slice(0, index),
        ...todos.slice(index+1, todos.length)
      ]
    })
  }

 


  render(){

    const {input, todos} = this.state;
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove,
    } = this

    return (
      <div >
        <PageTemplate>
          <TodoInput 
                    onChange={handleChange}
                    onInsert={handleInsert} 
                    value={input}/>
          <TodoList todos={todos} 
                    onToggle={handleToggle} 
                    onRemove={handleRemove}
                    />
        </PageTemplate>
      </div>
    );
  }
}

export default App;
