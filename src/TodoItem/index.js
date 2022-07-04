import { Button } from 'react-bootstrap';
import {ListButtonWrapper, StyledListItem, ListItemWrapper} from "./style";

export const TodoItem = ({toDo, setToDolist}) => {
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
            {toDo.text}
        </StyledListItem>
        <ListButtonWrapper>
            <Button variant="success" >complete</Button>
            <Button onClick={onDeleteToDo} variant="danger" >delete</Button>
        </ListButtonWrapper>
    </ListItemWrapper>
    )
}
