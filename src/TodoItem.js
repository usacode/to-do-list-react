import React from 'react';

const TodoItem = ({ todo, handleRemove }) => {
  return (
    <div className="todo-item">
      <span>{todo}</span>
      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
