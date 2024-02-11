import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleRemove }) => {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          handleRemove={() => handleRemove(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
