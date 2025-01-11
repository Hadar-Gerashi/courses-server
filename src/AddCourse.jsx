import { useForm } from 'react-hook-form'
import axios from 'axios'
import '../src/add.css'
const AddCourse = ({ add }) => {

    let { register, handleSubmit, reset } = useForm()


    const save = (data) => {
        axios.post("https://server-courses.onrender.com/api/student", data).then(res => {
            console.log(res)
            alert("נוסף בהצלחה")
            reset()
            add(res.data)
        })

            .catch(err => {
                alert("תקלה בהוספת קורס " + err.message)
            })



    }


    return (

        <form onSubmit={handleSubmit(save)} className="form-container">
            <h2 className="form-title">Registration Form</h2>

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                {...register("userName")}
                id="name"
                className="form-input"
                placeholder="Enter your name"
            />

            <label htmlFor="fine">Fine:</label>
            <input
                type="number"
                {...register("fine")}
                id="fine"
                className="form-input"
                placeholder="Enter fine amount"
            />

            <label htmlFor="pass">Password:</label>
            <input
                type="password"
                {...register("password")}
                id="pass"
                className="form-input"
                placeholder="Enter your password"
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                {...register("email")}
                id="email"
                className="form-input"
                placeholder="Enter your email"
            />

            <label htmlFor="phone">Phone:</label>
            <input
                type="text"
                {...register("phone")}
                id="phone"
                className="form-input"
                placeholder="Enter your phone number"
            />

            <input
                type="submit"
                className="submit-button"
                value="Submit"
            />
        </form>);
}

export default AddCourse;