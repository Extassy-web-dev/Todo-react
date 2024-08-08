import { useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();


    setData([...data, task])
    setTask('')

  };

  const deleteTodo = idx => {
    const updatedTodo = data.filter((_, i) => i !== idx)
    setData(updatedTodo)
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="todo__box">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} name='todo'>
              <input type="text" name="name" value={task} required onChange={(e) => { setTask(e.target.value) }} />

              <button type='submit'>Add</button>
            </form>
            <div className="line"></div>
            <div className="todo__elems">
              {data.map((item, i) => {
                return (
                  <div key={i} className="todo__elem">
                    <div className="top">
                      <span onClick={() => {
                        document.querySelectorAll("span").forEach(item => item.style.textDecoration = "line-through red")
                      }}>{item}</span>
                      <button onClick={() => {deleteTodo(i)}}><img src="../cross.svg" alt="cross" /></button>
                    </div>
                    <p><i>{new Date().getHours()}:{new Date().getMinutes()}</i></p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
