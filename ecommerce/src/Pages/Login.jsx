import React from "react";
import Header from "./Header";


const Login=()=>{
    return(
        <>
        <Header/>
        <div className="second-header">
 <h4>Login page</h4>
 <p>Welcome to E-commerce shopping</p>
        </div>
 <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit">Login</button>
        </form>
    </div>
        </>
    );
}

export default Login