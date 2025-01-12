import axios from 'axios'
import { useForm } from 'react-hook-form'
import '../src/update.css'
const Student = ({item,de,upda}) => {
    let { register, handleSubmit, reset } = useForm()

    
    const save = (data) => {
        data = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => value !== undefined && value !== null && value !== '')
          );
        axios.put(`https://server-courses.onrender.com/api/student/${item._id}`, data).then(res => {
            console.log(res)
            alert("עודכן בהצלחה")    
            upda(res.data,item._id)
            reset()
        })

            .catch(err => {
                alert("תקלה בעדכון קורס " + err.message)
            })
    }


    return (
        <div>
            <p>name:{item.userName}</p>
            <p>fine: {item.fine} </p>
            <p>password: {item.password} </p>
            <p>email: {item.email} </p>
            <p>phone: {item.phone} </p>

            <input type="button" name="" id="" value="🗑️" onClick={()=>{
                axios.delete(`https://server-courses.onrender.com/api/student/${item._id}`).then(res=>{
                    console.log(res)
                    alert(res.data.name+" נמחק בהצלחה!!!")
                    de(item._id)

                }).catch(err=>{
                    console.log(err)
                })
            }

            } />



<form className="form-container2" onSubmit={handleSubmit(save)}>
            

            <label htmlFor="name">Name:</label>
            <input
                type="text"
                {...register("userName")}
                id="name"
                className="form-input2"
                
            />


            <label htmlFor="pass">Password:</label>
            <input
                type="password"
                {...register("password")}
                id="pass"
                className="form-input2"
               
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                {...register("email")}
                id="email"
                className="form-input2"
                
            />

            <label htmlFor="phone">Phone:</label>
            <input
                type="text"
                {...register("phone")}
                id="phone"
                className="form-input2"
               
            />

            <input
                type="submit"
                className="submit-button2"
                value="✏️"
            />
        </form>







            <br />
            <br />
           

         

        </div>
    );
}

export default Student;