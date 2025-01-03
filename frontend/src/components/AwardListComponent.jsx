import { react, useState, useEffect } from 'react'
import './AddAwards.css'
// Award	List	Component:


const AwardListComponent = () => {
    return (
        <>
            <div class="award-card" id="award-2">
                <span class="delete-icon">&times;</span>
                <h3>Coding Guru</h3>
                <p>Solve 5 challenges.</p>
                <div class="progress-bar">
                    <div class="progress" style={{ width: 40 }}></div>
                </div>
                <button class="update-button">Update Progress</button>
                <button class="update-button">Edit</button>
            </div>
        </>
    )
}

export default AwardListComponent;