import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { logedInContext } from './App'

export default function Nav(props) {
    let logedIn = React.useContext(logedInContext)
    return (
        <div>
            <h1 className='big-title'> MY HOMEWORKS AND LABS</h1>
        <ul className='nav'>
            {logedIn? <li onClick={()=> props.setLogedIn(false)}>Logout</li> : <li><Link to="/">Login</Link></li>}
            {logedIn? <li><Link to="/Home">Home</Link></li> : ''}
            {logedIn? <li><Link to="/About">About</Link></li>: ''}
        </ul>
             <br/><br/> <hr/> 
        </div>
    )
}
