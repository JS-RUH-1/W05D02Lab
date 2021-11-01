import React from 'react'

export default function Login(props) {

    function login(e) {
        e.preventDefault();
        props.setLogedIn(true)
    }

    return (
        <div className='login-div'>
            <form onSubmit={(e)=> login(e)}>  
                <div className="container">   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username" name="username" required/>
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password" name="password" required/>
                    <button type="submit">Login</button>   
                    {/* <input type="checkbox" checked="checked"/> Remember me  <br/> <br/>  */}
                    Forgot <a href="#"> password? </a>   
                </div>   
            </form>     
        </div>
    )
}
