import React, { useState } from "react";
import "./Addtask.css";
import axios from "axios";
function Addtask() {
  const [taskstate, setTaskstate] = useState("");
  const [commentstate, setCommentState] = useState("");

  const addTaskNow = (props) => {
    if (taskstate.trim() === "" && commentstate.trim() === "") {
        alert("Please Enter the task and Comment about it and then Enter then submit")
      return;
    } else {
      axios
        .post("http://localhost:8000/api/tasks", {
          todo: taskstate,
          comments: commentstate,
          isCompleted: false,
        })
        .then(
          (res )=> setTaskstate("").props.addTaskNow(res.data),
          (res) => setCommentState("").props.addTaskNow(res.data),

        )
        .catch((err) => console.log(err));
    }
  };
  return (

    
    <div className="addtask">
      <div className="form-group">
        <label for="taskname">Task Name</label>
        <input
          className="form-control"
          type="text"
          id="taskname"
          placeholder="write your task "
          value={taskstate}
          onChange={(e) => setTaskstate(e.target.value)}
        ></input>
        <label for="commentname">Comment Name</label>

        <input
          className='form-control'
                    type='text'
          id="commentname"
          placeholder="write your Comment "
          value={commentstate}
          onChange={(e) => setCommentState(e.target.value)}
        ></input>
        <hr></hr>
        <div className="col mt-6">
        <button className="btn btn-primary" onClick={addTaskNow} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Add Task
        </button>
        {/* <button className="buttonfinal" id="buttonfinal" name="buttonfinal"> Animation </button> */}
        </div>
       
      </div>

      
    </div>
  );
}

export default Addtask;
