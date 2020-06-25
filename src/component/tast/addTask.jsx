import React, { Component, useState } from 'react';
import { Grid } from '@material-ui/core'



const Addtask = () => {

    let [task, setTask] = useState("");
    let [completed, setcompleted] = useState("");


    //onchange method
    let onChangetask = (e) => {
        setTask(e.target.value);
    }
    let onChangecompleted = (e) => {
        setcompleted(e.target.value);
    }


    //Onsubmit method adding new array in local storage  with new array 
    let onSubmitMethod = async (e) => {
        e.preventDefault()
        let taskData = window.localStorage.getItem('taskData');
        let dataold = JSON.parse(taskData)
        let data = { id: dataold.length + 1, title: task, completed: completed }

        window.localStorage.removeItem('taskData');
        let taskDataString = JSON.stringify([...dataold, data])

        window.localStorage.setItem('taskData', taskDataString);
        window.location.reload()
    }


    return (
        <>
            <form onSubmit={onSubmitMethod} >
                <label>Task</label>
                <input
                    style={{ minHeight: "30px", minWidth: "200px" }}
                    type="text"
                    name="Task"
                    onChange={onChangetask}
                    value={task}
                    placeholder="Enter Task" />
                <label>completed</label>
                <select onChange={onChangecompleted} style={{ minHeight: "30px", minWidth: "200px" }} >
                    <option defaultValue> </option>
                    <option> True</option>
                    <option> False</option>
                </select>

                {/* <input
                    type="boolean"
                    name="completed"
                    onChange={}
                    value={completed}
                    placeholder="Enter True or False" /> */}

                <button variant="danger" type="submit" >  Submit </button>
            </form>

        </>

    )

}

export default Addtask;