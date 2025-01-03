import { react, useState, useEffect } from 'react'
import './AddAwards.css'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

// Add	Form	Component


const AddFormComponent = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [awardRequirment, setAwardRequirment] = useState(0)
    const handleForm = () => {
        
        alert(title)
    }

    const clearForm = () => {
        setAward({ title: '', description: '', awardRequirment: 0 })
    }

    return (
        <>
            <div class="container">
                <div class="form-container" id="awardForm">
                    <input type="text" id="awardTitle" placeholder="Award Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <input type="text" id="awardDescription" placeholder="Award Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    <input type="number" id="awardRequirement" placeholder="Requirements (e.g., 10)" value={awardRequirment} onChange={(e) => setAwardRequirment(e.target.value)}></input>
                    <button onClick={handleForm}>Submit</button>
                    <button onClick={clearForm} class="clear-button">Clear</button>
                </div>
            </div >

        </>
    )
}

export default AddFormComponent;