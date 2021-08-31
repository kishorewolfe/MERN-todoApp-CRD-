import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import './App.css'
import TodoLists from './components/TodoLists';
import Addtask from './components/Addtask';
function App() {
  const [todolist, settodolist] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/tasks/').then(res =>{
      settodolist(res.data);

    }).catch(err=>{
      console.log(err)
    })

  },[])
  const addTask = (newTaskadd)=>{
    settodolist([...todolist,newTaskadd])
  }
  const TaskComplete = (task) =>{
    const newList= [...todolist]

    newList.forEach(item=>{
      if(item._id===task._id){
        item.isCompleted=task.isCompleted;

      }
    })
    settodolist(newList)
  }
  const removeTask= (task)=>{
    const newList = todolist.filter(item =>!(task._id===item.__id))
    settodolist(newList);

  }
  return (
    <div>
    <Addtask addTask={addTask}/>
    <TodoLists todolist={todolist} TaskComplete = {TaskComplete} removeTask ={removeTask}/>

    </div>
  )
}

export default App
