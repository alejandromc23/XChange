import React from 'react'
import './Container.sass'

function Container({children}) {
    return(
        <div className='container'>
            <nav className='navigation'></nav>

            {children}
        </div>
    )
}

export default Container