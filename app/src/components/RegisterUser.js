import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterUser.sass'

function RegisterUser() {
    return(
        <section className='register'>
            <h1 className='register__title'>Register</h1>
            <form className='register__form' method='POST'>
                <input className='register__form-input' autocapitalize='true' placeholder='Name' required/>
                <input className='register__form-input' autocapitalize='true' placeholder='Surname' required/>
                <input className='register__form-input' type='email' placeholder='Email' required/>
                <input className='register__form-input' type='password' placeholder='Password' required/>
            </form>
            or <Link to='/'>Back</Link>
        </section>
    )
}

export default RegisterUser