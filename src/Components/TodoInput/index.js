import {useState} from 'react'
import nextId from "react-id-generator";
import {Button} from "react-bootstrap";
import {AddTodoWrapper, StyledTodoInput} from "./style";

export function TodoInput({setToDolist}) {
    const[text, setText] = useState('')
    const onInputChange = (e) => {
        const {data} = e.nativeEvent
        setText((prev) => {
            const value = prev + data;
            return value;
        })

    }
    const onAddTodo = () => { 
        setToDolist((prev) => {
            const createTodo = {
                id: nextId(),
                text,
                isDone: false
            }
            // console.log(prev);
            setText('')
            return [...prev, createTodo];
        })
    }
    return(
        <AddTodoWrapper>
            <StyledTodoInput
                onChange={onInputChange}
                type='text'
                value={text}
                placeholder='add toDo here' 
            />
            <Button onClick={onAddTodo} variant="primary" >
                Add Todo
            </Button>
        </AddTodoWrapper>
    )
}