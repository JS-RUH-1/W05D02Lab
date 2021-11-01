import React from 'react'
import { logedInContext } from './App'

export default function Home() {
    let logedIn = React.useContext(logedInContext)
    return (
        <div>
            { logedIn? <h1>YOU ARE LOGGED IN</h1> : <h1>YOU ARE NOT LOGGED IN</h1>}
        </div>
    )
}
