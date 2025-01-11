import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListCourses from './ListCourses'
import axios from "axios"
import AddCourse from './AddCourse'

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

  const add = (newU) => {
    setCourses([...courses,newU])
  }



  return (
    <>
      <AddCourse add={add}/>
      <ListCourses arr={courses} d={dell} />
    </>
  )
}

export default App
