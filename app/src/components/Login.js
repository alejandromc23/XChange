import React from 'react'
import { Link } from 'react-router-dom'
import './Login.sass'

function Login() {
    return(
        <section className='login'>
            <h1>Login</h1> or <Link to='/'>Back</Link>
        </section>
    )
}

export default Login