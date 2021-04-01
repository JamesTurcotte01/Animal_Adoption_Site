import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {navigate} from '@reach/router';

const Form = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
    })

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: "",
    });

    const onChangeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/animals/new", form)
        .then(res => {
            setForm(res.data);
            if(res.data.animal){
                navigate('/');
            }
            else{
                setErrors(res.data.error.errors);
            }
        })
        .catch(err => console.log(err))

}
        
    return (
    <div className="App">
        <a href = {'/'}>Home</a>
        <h1 class="display-1">Pet Shelter</h1>
        <h3>Know a Pet needing a Home?</h3>
        <form onSubmit={onSubmitHandler}>
            <div>  
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Pet Name</span>
                    <input type="text" name="name" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    {errors.name ? <span className="alert alert-danger">{errors.name.message}</span> :"" }
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Pet Type</span>
                    <input type="text" name="type" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    {errors.type ? <span className="alert alert-danger">{errors.type.message}</span> :"" }
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Pet Description</span>
                    <input type="text" name="description" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    {errors.description ? <span className="alert alert-danger">{errors.description.message}</span> :"" }
                </div>
            </div>
            <div>
            <h5>Skills(Optional):</h5>
            <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Skill 1:</span>
                    <input type="text" name="skillOne" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Skill 2:</span>
                    <input type="text" name="skillTwo" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3 d-flex justify-content-center">
                    <span className="input-group-text" id="inputGroup-sizing-default">Skill 3:</span>
                    <input type="text" name="skillThree" className="form-control col-sm-5 " onChange={onChangeHandler} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>     
            <button type="submit" class="btn btn-outline-success">Add Pet</button>
        </form>
    </div>
    );
}
export default Form;