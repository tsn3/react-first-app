import { TodoItem } from "../TodoItem"
import {ListItemTodo, ListTodo} from "./style";

export const TodoList = ({toDolist, setToDolist}) => {
    console.log(toDolist);
    return (
        <>
            {toDolist.length === 0 && <div> Nothing ToDO</div>}

            {toDolist && toDolist.length !== 0 
            && <div>
                    <ListTodo>
                        {toDolist.map((toDo) => <ListItemTodo key = {toDo.id}><TodoItem toDo = {toDo} setToDolist = {setToDolist} /></ListItemTodo>)}
                    </ListTodo>
                </div>
            }        
        </>
    )     
}