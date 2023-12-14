import React, { useRef , memo} from "react";
// import Form from 'react-bootstrap/Form';/

import './Form.css'

const InputForm = (props) => {

    // const [tittle, setTittle] = useState('')
    // const [description, setDescription] = useState('')
    // const [releaseDate , setReleaseDate] = useState('')

    const tittleRef = useRef('');
    const descriptionRef = useRef('');
    const releaseDateRef = useRef('');

    const formHandler = (event) =>{
        event.preventDefault();

        const obj ={
            tittle: tittleRef.current.value,
            description: descriptionRef.current.value,
            releaseDate: releaseDateRef.current.value
        };

        tittleRef.current.value = '';
        descriptionRef.current.value = '';
        releaseDateRef.current.value = '';

        console.log(obj);

        props.onFormSubmit(obj)
    }

    // const tittleHandler = (event) =>{
    //     setTittle(event.target.value)
        
    // }
    // const descriptionHandler = (event) =>{
    //     setDescription(event.target.value)
        
    // }
    // const releaseDateHandler = (event) =>{
    //     setReleaseDate(event.target.value)
        
    // }

    // const formHandler = (event) =>{
    //     event.preventDefault()

    //     const obj ={
    //         tittle,
    //         description,
    //         releaseDate
    //     }

    //     setTittle('')
    //     setDescription('')
    //     setReleaseDate('')
    //     console.log(obj)
    // }

    return (
        <form className="formDiv" onSubmit={formHandler}>
            {console.log('form')}
            <label><b>Tittle</b></label><br></br>
            <input type="text" placeholder="Tittle" ref={tittleRef} /><br></br>

            <label><b>Opening Text</b></label><br></br>
            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="Enter text here..." ref={descriptionRef} >
            </textarea><br></br>


            <label><b>Release Date</b></label><br></br>
            <input type="text" placeholder="Release Date" ref={releaseDateRef} /><br></br>

            <button type="submit" >Add movie</button>

        </form>
    );
}

export default memo(InputForm)