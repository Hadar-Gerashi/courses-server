import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListStudent from './ListStudent'
import axios from "axios"
import AddStudent from './AddStudent'

function App() {
  const [count, setCount] = useState(0)
  const [courses, setCourses] = useState([])


  useEffect(() => {
    axios.get("https://server-courses.onrender.com/api/student").then(response => {
      console.log(response.data)
      setCourses(response.data)
    }).catch(err => {
      console.log(err)
      alert("mistake-> " + err.message)

    })
  }, [])


  const dell = (id) => {
    setCourses(courses.filter(item => item._id != id))
  }

  const update = (newU, id) => {  
    setCourses(courses.map(item => {
      if (item._id === id) {
        return { ...item,...newU };
      }
      return item;
    }));
  }

  const add = (newU) => {
    setCourses([...courses, newU])
  }



  return (
    <>
      <AddStudent add={add} />
      <ListStudent arr={courses} d={dell} upda={update}/>
    </>
  )
}

export default App
