import react, { useState, useEffect } from "react";
import './AddAwards.css'

//CardComponent:

const CardComponent = () => {
    return (
        <>

            <div class="award-card" id="award-1">
                <span class="delete-icon">&times;</span>
                <h3>Fitness Champion</h3>
                <p>Complete 10 workouts.</p>
                <div class="progress-bar">
                    <div class="progress" style={{ width: 50 }}></div>
                </div>
                <button class="update-button">Update Progress</button>
                <button class="update-button">Edit</button>
            </div>

        </>
    );
}




export default CardComponent;