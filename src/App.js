import {useState} from 'react'
import './App.css';

function App() {
    const [tasks, setTasks] = useState([
      {name: 'Buy Shopping', priority: 'High', id: 1},
      {name: 'Clean Bathroom', priority: 'Low', id: 2},
      {name: 'Cars MOT', priority: 'High', id: 3}
    ])
    
  const handleTaskInput = (event) => {
   return setNewTask(event.target.value)
  }

  const changePriority = (e, id) => {
    const newTasks = [...tasks];
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.priority = e.target.value;
        task.status = e.target.value === 'high' ? 'High' : 'Normal'; // update the status based on the selected priority
      }
    });
    setTasks(newTasks);
  }
  
  
  
   

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') {
      return; // Do nothing if newTask is empty or contains only whitespace
    }
    const copyTasks = [...tasks];
    copyTasks.push({
      name: newTask,
      priority: 'Low',
      status: 'Normal',
      id: Date.now()
    });
    setTasks(copyTasks);
    setNewTask('');
  }
  
  

  

  const [newTask, setNewTask] = useState('')
  return (
    <>
      <h1>To Do List!</h1>
      <ul>
      {tasks.map((task, index) => {
  return (
    <li key={task.id} className={task.priority === 'low' ? 'low' : 'high'}>
      <span>
        {task.name} - Priority: {task.priority}
      </span>
      <form>
        <input
          type="radio"
          id={`low-${task.id}`}
          name={`priority-${task.id}`}
          value="low"
          checked={task.priority === 'low'}
          onChange={(e) => changePriority(e, task.id)}
        />
        <label htmlFor={`low-${task.id}`}>Low</label>
        <input
          type="radio"
          id={`high-${task.id}`}
          name={`priority-${task.id}`}
          value="high"
          checked={task.priority === 'high'}
          onChange={(e) => changePriority(e, task.id)}
        />
        <label htmlFor={`high-${task.id}`}>High</label>
      </form>
    </li>
  )
})}



        
      </ul>

      <form onSubmit={handleTaskSubmit}> 
      <label htmlFor="new-task">Add New Task</label>
      <input type="text" id="new-task" onChange = {handleTaskInput} value = {newTask}/>
      <button>Save Task</button>
      </form>
    </>

  );
}

export default App;
