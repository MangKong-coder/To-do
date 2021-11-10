import { useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Data
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    console.log(data)
    return data
  }

  const fetchTaskId = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    console.log(data)
    return data
  }

  //Add task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }
  //Delete task
 const deleteTask = async id => {
   await fetch(`http://localhost:5000/tasks/${id}`, {
     method: 'DELETE'
   })
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle reminder
 const toggleReminder = async(id) => {
   const taskToToggle = await fetchTaskId(id)
   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder}: task))
 }

  return (
    <div className="App">
      <div className="container">
        <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} propShowAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}/> : <h2>No more Tasks!</h2>}
      </div>
    </div>
  );
}

export default App;
