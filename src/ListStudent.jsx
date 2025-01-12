import Student from "./Student";

const ListStudent = (prop) => {
    return (
        prop.arr.length == 0 ? <h1>no users</h1> :
            <ul>
                {prop.arr.map(item => <li key={item._id} ><Student item={item} de={prop.d} upda={prop.upda} /></li>)}
            </ul>
    );
}

export default ListStudent;