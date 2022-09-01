import React from 'react'

function Child(props) {
    const { empdata } = props;
    console.log(empdata);
    return (
        <div>

            <table>

                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USER NAME</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                </thead>
                <tbody>
                    {
                        empdata.map((each, id) => (
                            <tr key={id}>
                                <td>{each.id}</td>
                                <td>{each.name}</td>
                                <td>{each.username}</td>
                                <td>{each.email}</td>
                                <td>{each.address.city}</td>
                                <td>{each.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>

    )

}

export default Child