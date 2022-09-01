import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Slice/userSlice';
import '../Users.css';


function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state);
  // console.log(users);

  return (
    <div className='main-div'>
      <h1>Users Details</h1>
      <button onClick={() => dispatch(getUsers())}>users data</button>
      <table className='table'>
        {users.status === "accepted" && <thead className='head'>
          <tr className='row'>
            <th className='th'>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>City</th>
            <th>Lattitude</th>
            <th>Langitude</th>
            <th>Street</th>
            <th>Suite</th>
            <th>Zipcode</th>
            <th>Company</th>
          </tr>
        </thead>}
        <tbody className='body'>
          {users.list.map(each => <tr>
            <td className='td'>{each.id}</td>
            <td>{each.name}</td>
            <td>{each.username}</td>
            <td>{each.email}</td>
            <td>{each.address.city}</td>
            <td>{each.address.geo.lat}</td>
            <td>{each.address.geo.lng}</td>
            <td>{each.address.street}</td>
            <td>{each.address.suite}</td>
            <td>{each.address.zipcode}</td>
            <td>{each.company.name}</td>
          </tr>)}
        </tbody>
      </table>


    </div>
  )
}

export default Users