import { Button } from 'react-bootstrap';

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
    <div >
        <p>{toDo.text}</p>
        <Button variant="success" >complete</Button>
        <Button onClick={onDeleteToDo} variant="danger" >delete</Button>
    </div>
    )
}
