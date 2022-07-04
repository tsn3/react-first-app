import { Button } from 'react-bootstrap';
import {ListButtonWrapper, StyledListItem, ListItemWrapper, Done, NotDone} from "./style";
import {useState} from "react";

export const TodoItem = ({toDo, setToDolist}) => {
    const [isComplete, setIsComplete] = useState(false);
    const onDeleteToDo = () => {
        console.log(toDo.id);
        setToDolist((prev) => {
            const newList = prev.filter((item) => {
                return item.id !== toDo.id;
            })
            return newList
        })
    }
    return(
    <ListItemWrapper>
        <StyledListItem>
            {
                isComplete
                ? <Done>{toDo.text}</Done>
                : <NotDone>{toDo.text}</NotDone>
            }
        </StyledListItem>
        <ListButtonWrapper>
            <Button onClick={() => { setIsComplete((prev) => !prev) }} variant="success" >complete</Button>
            <Button onClick={onDeleteToDo} variant="danger" >delete</Button>
        </ListButtonWrapper>
    </ListItemWrapper>
    )
}
