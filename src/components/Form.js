import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';/

import './Form.css'

const InputForm = (props) => {

    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')
    const [releaseDate , setReleaseDate] = useState('')

    const tittleHandler = (event) =>{
        setTittle(event.target.value)
        
    }
    const descriptionHandler = (event) =>{
        setDescription(event.target.value)
        
    }
    const releaseDateHandler = (event) =>{
        setReleaseDate(event.target.value)
        
    }

    const formHandler = (event) =>{
        event.preventDefault()

        const obj ={
            tittle,
            description,
            releaseDate
        }

        setTittle('')
        setDescription('')
        setReleaseDate('')
        console.log(obj)
    }

    return (
        <form className="formDiv" onSubmit={formHandler}>

            <label><b>Tittle</b></label><br></br>
            <input type="text" placeholder="Tittle" value={tittle} onChange={tittleHandler}/><br></br>

            <label><b>Opening Text</b></label><br></br>
            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Enter text here..." value={description} onChange={descriptionHandler}>
            </textarea><br></br>


            <label><b>Release Date</b></label><br></br>
            <input type="text" placeholder="Release Date" value={releaseDate} onChange={releaseDateHandler}/><br></br>

            <button type="submit" >Add movie</button>

        </form>
    );
}

export default InputForm