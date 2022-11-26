import React, { useContext } from 'react';
import { useTodos } from '../../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos }  = useTodos()
    
    return (
        <ul>
           {
            todos.map( todo  => <TodoItem  key={todo.id} todo={todo} /> )
           } 
        </ul>
    );
};

export default TodoList;