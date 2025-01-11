import axios from 'axios'
const Courses = ({item,de}) => {
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
            <br />
            <br />
           

         

        </div>
    );
}

export default Courses;