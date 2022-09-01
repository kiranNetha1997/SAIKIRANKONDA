import React, { useEffect, useState } from 'react';
import Child from './Child';


function Parent() {
    const [empdata, setEmpdata] = useState([]);
    // console.log(empdata)

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setEmpdata(data)
            })
    };
    useEffect(() => {
        fetchData()
    }, [1]);



    return (
        <Child empdata={empdata} />
    )
}

export default Parent;