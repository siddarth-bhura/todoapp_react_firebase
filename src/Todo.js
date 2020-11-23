import React from "react"
import {List,ListItem,ListItemText} from "@material-ui/core"
import "./Todo.css"
const Todo = ({todo}) => {
return(
    <div>
        <List className="todo_list">
    <ListItem>
    <ListItemText primary={todo} />
    </ListItem>
</List>
    </div>

)
}

export default Todo