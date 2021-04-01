import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AllAnimals = (props) => {
    const [animals, setAnimal] = useState([]);
    const [loaded, setLoaded] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/animals")
            .then(res=> {
                setAnimal(res.data.animals)
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    },[loaded])

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/animals/delete/${_id}`)
            .then(res => {
                console.log(res)
                setLoaded(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 class="display-1">Pet Shelter</h1>
            <a href = {'/api/animals/new/'}>Add Pet to the Shelter</a>
            <h4>These Pets are Looking for a Good Home</h4>
            <table className="table table-secondary table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                        animals.map((item, key) => {
                            return <tr key={key}>
                                        <td>{item.name}</td>
                                            <td>{item.type}</td>
                                        <td><a href = {'/api/animals/' + item._id} key={key}><button className="btn btn-outline-info">Details</button></a>
                                        <a href = {'/api/animals/update/' + item._id} key={key}><button className="btn btn-outline-danger">Edit</button></a>
                                        </td>
                                    </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
export default AllAnimals;