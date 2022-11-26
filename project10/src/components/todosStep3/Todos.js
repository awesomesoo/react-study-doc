import React, { useContext } from 'react';
import { ColorContext } from '../../contexts/ColorContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    const { color }  = useContext(ColorContext )
    return (
        <div>
            <h1 style={{ color:color }}>할일 만들기 / </h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todos;