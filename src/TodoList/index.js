import { TodoItem } from "../TodoItem"

export const TodoList = ({toDolist, setToDolist}) => {
    console.log(toDolist);
    return (
        <>
            {toDolist.length === 0 && <div> Nothing ToDO</div>}

            {toDolist && toDolist.length !== 0 
            && <div>
                    <ol>
                        {toDolist.map((toDo) => <li key = {toDo.id}><TodoItem toDo = {toDo} setToDolist = {setToDolist} /></li>)}
                    </ol>
                </div>
            }        
        </>
    )     
}