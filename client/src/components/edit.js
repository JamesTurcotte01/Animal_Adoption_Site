import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {navigate} from '@reach/router';
import {Link} from '@reach/router';


const Edit = (props) => {
    const [singleAnimal, setSingleAnimal] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
        likes: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: "",
    });
    
    const onSubmitHandler = event => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/animals/update/${props.id}`, singleAnimal)
        .then(res => {
            console.log(res)
            setSingleAnimal(res.data);
            if(res.data.animal){
                navigate('/');
            }
            else{
                setErrors(res.data.error.errors);
            }
        })
        .catch(err => console.log(err))
    }
    
    const onChangeHandler = event => {
        setSingleAnimal({
            ...singleAnimal,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/animals/' + props.id)
            .then(res=>{
                setSingleAnimal(res.data.animal)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    },[props.id])

        
    return (
    <div className="App">
        <a href = {'/'}>Home</a>
        <h3>Edit This Animal</h3>
        <form onSubmit={onSubmitHandler}>
            <div>  
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Pet Name</span>
                    <input type="text" name="name" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" value={singleAnimal.name} aria-describedby="inputGroup-sizing-default"/>
                    {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> :"" }
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Pet Type</span>
                    <input type="text" name="type" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" value={singleAnimal.type} aria-describedby="inputGroup-sizing-default"/>
                    {errors.type ? <span className="alert alert-danger">{errors.type.message}</span> :"" }
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Pet Description</span>
                    <input type="text" name="description" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" value={singleAnimal.description} aria-describedby="inputGroup-sizing-default"/>
                    {errors.description ? <span className="alert alert-danger">{errors.description.message}</span> :"" }
                </div>
            </div>
            <div>
            <h5>Skills(Optional):</h5>
            <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Skill 1:</span>
                    <input type="text" name="skillOne" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" value={singleAnimal.skillOne} aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Skill 2:</span>
                    <input type="text" name="skillTwo" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" value={singleAnimal.skillTwo} aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Skill 3:</span>
                    <input type="text" name="skillThree" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" value={singleAnimal.skillThree} aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>     
            <button type="submit" class="btn btn-outline-success">Add Pet</button>
        </form>
    </div>
    );
}
export default Edit;