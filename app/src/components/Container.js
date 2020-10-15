import React, {useState} from 'react'
import './Container.sass'
import Hamburger from 'hamburger-react'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiShirtLine } from 'react-icons/ri'
import { BiFootball } from 'react-icons/bi'
import { GiFilmProjector } from 'react-icons/gi'
import { BsHouseDoor } from 'react-icons/bs'

function Container({children}) {
    const [isOpen, setOpen] = useState(false)

    return(
        <div className='container'>
            <div className='header'>
                <h2 className='header__title'>XChange</h2>
                <Hamburger toggled={isOpen} toggle={setOpen}/>  
            </div>
                {isOpen ? 
                <div className='body'>
                    <nav className='body__navigation'>
                        <h2 className='body__navigation-button body__navigation-button--blue'>Exchange now</h2>
                        <h2 className='body__navigation-button body__navigation-button--white'>Sign In | Register</h2>
                    </nav>
                    <section className='categories'>
                        <h4 className='categories__title'>Categories</h4>
                        <ul className='categories__list'>
                            <li className='categories__list-item' >
                                <HiOutlineDesktopComputer className='categories__list-icon'/>
                                Technology
                            </li>
                            <li className='categories__list-item' >
                                <RiShirtLine className='categories__list-icon'/>
                                Fashion and Accesories
                            </li>
                            <li className='categories__list-item' >
                                <BiFootball className='categories__list-icon'/>
                                Sports
                            </li>
                            <li className='categories__list-item' >
                                <GiFilmProjector className='categories__list-icon'/>
                                Cinema, Books and Music
                            </li>
                            <li className='categories__list-item' >
                                <BsHouseDoor className='categories__list-icon'/>
                                Decoration
                            </li>
                        </ul>
                    </section>
                </div>
                : 
                <div className='body'>
                    {children}
                </div>
                }
            
        </div>
    )
}

export default Container