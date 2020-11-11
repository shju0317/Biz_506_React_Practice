import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    /*
    클래스 방식에서 parent 컴포넌트로부터 받은 변수(데이터)는
    this.props에 일반적으로 받게 된다
    함수방식에서는 : (props) =>{} or ({todoList})=>{} 이처럼 바로
    매개변수로 받을 수 있지만
    클래스 방식에서는 this.props로 필요한 데이터를 분해해야 한다.
    */
    const { todoList, onToggle, onDeleteItem } = this.props; // 데이터 분해하기

    const viewTodoList = todoList.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDeleteItem={onDeleteItem}
        />
      );
    });

    return <div>{viewTodoList}</div>;
  }
}

export default TodoList;
