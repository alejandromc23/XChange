import React from 'react'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <section className='landing'>
            <Link to='/login'>Login</Link> or <Link to='/register'>Register</Link>
        </section>
    )
}

export default Landing