import { useTodos } from "../../contexts/TodoContext";

const TodoItem = ({ todo }) => {
    const { id, text, isChk } = todo 
    const { onDel, onToggle } = useTodos()
    return (
        <li style={{ color: isChk ? 'tomato':'#000'}}>
           <input type="checkbox" checked={ isChk } onChange={ () => onToggle(id) } />
           { text }
           <button onClick={() => onDel(id) }>삭제</button> 
        </li>
    );
};

export default TodoItem;