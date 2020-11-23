import React,{useState,useEffect} from "react"
import './App.css';
import {Button, Input, InputLabel,FormControl} from "@material-ui/core"
import Todo from './Todo'
import firestore from "./firebase"
import firebase from "firebase"

function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState("");

  useEffect(() => {
    firestore.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

const addTodo = (event) => {
  event.preventDefault()

firestore.collection("todos").add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})
setInput('')
}

  return (
    <div className="App">
      <h1>Hello Devs!!</h1>
      <form>
        <FormControl>
          <InputLabel>
          Write a Todo
          </InputLabel>
          <Input value={input} 
      onChange={event => setInput(event.target.value)}/>
        </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
  Add Todo
</Button>
      </form>
      <h3>Todos...</h3>
    <ul>
      {todos.map(todo => (
        <Todo todo={todo}/>
      ))}
    </ul>
    </div>
  );
}

export default App;
