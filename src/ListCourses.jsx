import Courses from "./courses";

const ListCourses = (prop) => {
    return (
        prop.arr.length == 0 ? <h1>no users</h1> :
            <ul>
                {prop.arr.map(item => <li key={item._id} ><Courses item={item} de={prop.d} /></li>)}
            </ul>
    );
}

export default ListCourses;