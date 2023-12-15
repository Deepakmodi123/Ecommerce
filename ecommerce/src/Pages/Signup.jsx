import React from "react";
import Header from "./Header";

const Signup=()=>{
    return(
        <>
        <Header/>
        <div className="second-header">
 <h4>Signup page</h4>
 <p>Welcome to E-commerce shopping</p>
        </div>
        <div className="login-container">
        <h2>Signup</h2>
        <form className="login-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>


            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Signup</button>
        </form>
    </div>
        </>
    );
}

export default Signup