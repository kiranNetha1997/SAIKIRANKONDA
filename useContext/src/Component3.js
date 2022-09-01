import React ,{useContext} from 'react'
import  { useUrl } from './App'

function Component3() {
  const data = useContext(useUrl)
 

  return (
    <div id='maindiv'>
      <p>Data Display in Component3</p>
      <h1>Employee Details</h1>
      <table className ='table'>
        <thead>
          <tr>
            <th >id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
         {data.map(each=>(
           <tr>
             <td>{each.id}</td>
             <td>{each.name}</td>
             <td>{each.username}</td>
             <td>{each.email}</td>
             <td>{each.email}</td>
             
             
           </tr>
         ))}
        </tbody>
      </table>
    </div>
    
  ) 
}

export default Component3

