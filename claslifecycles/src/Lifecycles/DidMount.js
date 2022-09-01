import React, { Component } from 'react'
import styles from './DidMount.css';

export class DidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(Response => Response.json())
            .then(Response => this.setState({ posts: Response }));
       console.log("component didmount")
    }

    render() {
        const { posts } = this.state
        return (
            <div className='main'>
                <h1>DidMount With API</h1>
                <table className='table'>

                    <thead className='thead'>
                        <tr>
                            <th className=''>Id</th>
                            <th >Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Suite</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>zipcode</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map(each => (
                            <tr>
                                <td>{each.id}</td>
                                <td>{each.name}</td>
                                <td>{each.username}</td>
                                <td>{each.email}</td>
                                <td>{each.address.suite}</td>
                                <td>{each.address.street}</td>
                                <td>{each.address.city}</td>
                                <td>{each.address.zipcode}</td>
                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        )
    }
}

export default DidMount;