import React from "react"
// import "./homepage.css"
import { useNavigate } from 'react-router-dom';


const Homepage = ({setSigninUser}) => {

    const navigate = useNavigate();


    return (
        <div className = "homepage">

            <h1>Welcome to Blockchain Project</h1>

            {/* <div className="button" onClick = {() => setSigninUser({})}>SignOut</div> */}
            <div className="button" onClick = {() => navigate('/signin')}>Enter to Project 👉🏽</div>

        </div>
    )
}

export default Homepage