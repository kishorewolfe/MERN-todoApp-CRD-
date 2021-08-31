import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import "./todolist.css";
function TodoLists(props) {
    const taskComplete = (task)=>{
        axios.put(`http://localhost:8000/api/tasks/${task._id}` ,{
            _id :task._id,
            todo:task.todo,
            comments :task.comments,
            isCompleted:!task.isCompleted
        }).then (res=>props.TaskComplete(res.data)).catch(err=>{
            if(err){
                console.log(err)
            }
            else{
                console.log('put function excecuted')
            }
        })
       
    }
    const removeTask = (id)=>{
        axios.delete(`http://localhost:8000/api/tasks/${id}`).then(res=>props.removeTask(res.data)).catch(err=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Remove task Successfully executed")
            }
        })
        

    }
 
    
    const todolist =props.todolist.map((task,index)=>{
        return(
<li key= {index} >

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{task.todo}</h5>
        <p class="card-text">{task.comments}    
                                    </p>
        <hr></hr>

        <a href="#" class="btn btn-primary"><CheckIcon className= {task.isCompleted ? 'isCompleted' : 'checkicon'} />
</a>
<a href="#" class="btn btn-danger"><CloseIcon className ='close' onClick={()=>{removeTask(task._id)}}  />

</a>

<a href="#" class="btn btn-secondary"><EditIcon className='edit'/> </a>

<a href="#" class="btn btn-success" onClick={()=>
                    taskComplete(task) } > Completed</a>



</div>

      </div>
  
</li>
            
        )
    })
    return (
        <div className='container'>
            
<div className="row">
  <div className="col-sm-4">
        <ul className="noBullet">
        {todolist}
        </ul>

        </div>
        </div>
        


        </div>

            
    )
}

export default TodoLists;
