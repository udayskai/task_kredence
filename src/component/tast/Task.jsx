import React, { useEffect, useState } from "react";
import Addtask from './addTask';
import { Grid, Typography, Button, Box, makeStyles } from '@material-ui/core'



let useStyles = makeStyles((theme) => ({
  id: {
    fontSize: "1rem",
  },
  title: {
  },
  button: {
    color: "white",
    backgroundColor: "red",
    borderRadius: "0x",
    maxHeight: "30px",
    marginLeft: "5px"

  },
  completed: {
    maxHeight: "40px",
    border: "1px solid black"
  },
  box: {
    backgroundColor: "white",
    borderBottom: "2px solid gray",
    minHeight: "60px",
  },
  addbutton: {
    backgroundColor: "blue"
  }
}
));


let Task = () => {

  let [taskDataState, settaskDataState] = useState(null);
  let [addTask, setaddTask] = useState(false);


  useEffect(async () => {
    let taskData = window.localStorage.getItem('taskData');
    let data = JSON.parse(taskData);
    console.log(data, "data");

    if (!data || data.length == 0) {
      let taskDataResponse = await fetch("http://jsonplaceholder.typicode.com/todos")
        .then((data) => data.json())
        .then((item) => item.slice(0, 5));
      let taskDataString = JSON.stringify(taskDataResponse);
      window.localStorage.setItem('taskData', taskDataString);
      window.location.reload()
    }
    settaskDataState({ taskDataState: data })
  }, [])



  //Action to remove Data from Present Array and store new data in local storage 
  let DeleteMethod = (id) => {
    let newData = taskDataState.taskDataState.filter((data) => data.id !== id)
    window.localStorage.removeItem('taskData');
    let taskDataString = JSON.stringify(newData);
    window.localStorage.setItem('taskData', taskDataString);
    window.location.reload();
  }

  let onClickAddMethod = () => {
    console.log("king khan");
    setaddTask(!addTask)
  }

  const classes = useStyles();

  //if not data then return form here
  if (taskDataState === null) {
    return null
  }
  console.log(taskDataState.taskDataState)
  return (
    <div className="container">
      <h1>Task page</h1>

      {/* maping of array  */}
      {taskDataState.taskDataState.map((item) => (
        <Grid item xs={12} key={item.id}>
          <Box item xs={8} display="flex" flexDirection="row" justifyContent="center" className={classes.box}>
            <Grid item xs={1} >
              <Typography className={classes.id}>
                {item.id}
              </Typography>
            </Grid>
            <Grid item xs={5} >
              <Typography className={classes.title}>
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <Typography className={classes.completed}>
                {item.completed.toString()}
              </Typography>
            </Grid>
            <Button className={classes.button} onClick={() => DeleteMethod(item.id)}>
              Delete
               </Button>
          </Box>
        </Grid>

      ))
      }
      {/* add task handeler */}
      <Box display="flex" flexDirection="row" justifyContent="flexStart" m={4} >
        <Grid xs={2} >
          <Button className={classes.addbutton} onClick={() => onClickAddMethod()}> {addTask ? "Cancel" : "Add Task"} </Button>
        </Grid>
        <Grid xs={8} >
          {addTask ? <>  <Addtask /> </>
            : null
          }
        </Grid>
      </Box>
    </div >
  )
}


export default Task;