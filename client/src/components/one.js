import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const One = (props) => {
    const [one, setOne] = useState({});
    const [loaded , setLoaded] = useState(false);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/animals/' + props.id)
        .then(res=>setOne(res.data.animal))
        .catch(err=>console.log(err))
    }, [props.id]);

    const onDeleteHandler = (_id) => {
        axios.delete(`http://localhost:8000/api/animals/delete/${_id}`)
            .then(res => {
                console.log(res)
                setLoaded(false)
            })
            .catch(err => console.log(err))
            navigate("/")
    }

    const onClickHandler = (_id) => {
        navigate(`update/${props.id}`)
    }
    return (
        <div>
            <div>
                <a href = {'/'}>Back to Home</a>
                <h1 class="display-1">Pet Shelter</h1>
            </div>
            <h4>Details About {one.name}:</h4>
            <h5>Pet Type: {one.type}</h5>
            <h5>Description: {one.description}</h5>
            <h5>Skills:</h5> <li>{one.skillOne}</li>
            <li>{one.skillTwo}</li><li>{one.skillThree}</li>
            <button onClick={ () => onDeleteHandler(props.id)}className="btn btn-outline-danger">Adopt {one.name}</button>
            
            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off">Like {one.name}</button>
        </div>
    )
}
export default One;