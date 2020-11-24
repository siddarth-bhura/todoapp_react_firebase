import React,{useState} from "react"
import {List,ListItem,ListItemText,Button, Modal} from "@material-ui/core"
import "./Todo.css"
import firestore from "./firebase"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing[2,4,3],
    }
}))

const Todo = ({todo}) => {

const [open,setOpen] = useState(false);
const [input,setInput] = useState();

const handleOpen = () => {
setOpen(true)
}

const classes = useStyles();

const updateTodo = () => {
    firestore.collection('todos').doc(todo.id).set({
      todo: input
    },{merge: true})
    setOpen(false)
}

return(
    <>
    <Modal open={open}
        onClose={e => setOpen(false)}>
        <div className={classes.paper}>
            <h1>I am Modal</h1>
            <input placeholder={todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
            <Button onClick={updateTodo}>Update Todo</Button>
        </div>
    </Modal>
        <List className="todo_list">
    <ListItem>
    <ListItemText primary={todo.todo} />
    </ListItem>
    <Button onClick={e => setOpen(true)}>Edit</Button>
    <Button variant="outlined" color="secondary" 
    onClick={event => firestore.collection('todos').doc(todo.id).delete()}>Delete Me</Button>
    
</List>
    </>

)
}

export default Todo