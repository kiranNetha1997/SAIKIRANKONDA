// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'




function Create() {

    const [fetchData, setfetchData] = useState([])
    const [inputdata, setinputData] = useState({ name: '', email: '', gender: '', status: '' })

    const postNow = (url, inputdata) => {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
                Authorization: 'Bearer 66698a75a3353057a98be6fdfced6cb335e78cfd499a6acdb3b995b2adc5394a'
            },
            body: JSON.stringify(inputdata)
        }
        fetch(url, options)

    }

    function postData(event) {

        postNow('https://gorest.co.in/public/v2/users', inputdata)
    }

    useEffect(() => {
        fetch("https://gorest.co.in/public/v2/users")
            .then(response => {
                return response.json()
            })
            .then(json => setfetchData(json))
    }, [])




    return (
        <div className='form-group'>Create Operations
            <form  onSubmit={postData}>
                <label id='name'>First Name : </label> 
                <input htmlFor='name' name='fname' type='text' placeholder='Name' onChange={(e) => setinputData({ ...inputdata, name: e.target.value })} /><br />
                <label id='email'>E-mail :</label> 
                <input name="email" type='text' placeholder='Email' onChange={(e) => setinputData({ ...inputdata, email: e.target.value })} /><br />
                
                <div onChange={(e) => setinputData({ ...inputdata, gender: e.target.value })}>
                <label id='gender'>Gender :</label> 
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other <br/>
                </div>
                <div  onChange={(e) => setinputData({ ...inputdata, status: e.target.value })}>
                <label id='status'>status :</label> 
                <input type="radio" value="active" name="status" /> Active
                <input type="radio" value="inactive" name="status" /> Inactive
                </div>
                <button className='btn' type='submit'>Submit</button>
            </form>
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th className='col'>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Gender</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchData.map((each, index) => (
                            <tr key={index}>
                                <td>{each.id}</td>
                                <td>{each.name}</td>
                                <td>{each.email}</td>
                                <td>{each.gender}</td>
                                <td>{each.status}</td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Create