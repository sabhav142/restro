'use client'
import { useState } from "react"
import ResturantLogin from "../_components/resturantLogin"
import ResturantSignUp from "../_components/resturantSignUp"
import ResturantHeader from "../_components/ResturantHeader"
import './style.css'
import ResturantFooter from "../_components/ResturantFooter"
const Resturant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>

            <div className="container">
                <ResturantHeader/>
                <h1>resturant Page</h1>


                {login ? (<ResturantLogin />) : (<ResturantSignUp />)}
                <div> <button className="button-link" onClick={() => setLogin(!login)}>{login ? "Do not have an Account? SignUp" : "Already have an account? Login"}</button></div>


            </div>
<ResturantFooter/>
        </>
    )
}

export default Resturant