import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RegisterUser.sass'
import { registerUser } from 'client-logic'

function RegisterUser({ onRegister }) {
    const [error, setError] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        let { name, surname, email, password } = event.target

        name = name.value
        surname = surname.value
        email = email.value
        password = password.value

        try {
            registerUser(name,surname,email,password)
                .then(() => onRegister())
                .catch(setError)
        } catch ({ message }) {
            setError(message)
        }
    }

    return(
        <section className='register'>
            <h1 className='register__title'>Register</h1>
            <form className='register__form' onSubmit={handleSubmit}>
                <input className='register__form-input' autoCapitalize='true' name='name' placeholder='Name' required/>
                <input className='register__form-input' autoCapitalize='true' name='surname' placeholder='Surname' required/>
                <input className='register__form-input' type='email' name='email' placeholder='Email' required/>
                <input className='register__form-input' type='password' name='password' placeholder='Password' required/>
                <a href='/' className='register__form-link' onClick={event => event.preventDefault()}>Read Terms and Conditions</a>
                <div className='register__form-checkbox'>
                    <input type='checkbox' id='conditions' name='conditions' value='accepted'/>
                    <label htmlFor='conditions'> I accept terms and conditions. </label>
                </div>
                <button className='register__form-submit' >Register</button>
            </form>
            {error && <p>Error</p>}
            or <Link to='/'>Back</Link>
        </section>
    )
}

export default RegisterUser