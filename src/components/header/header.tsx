import insta from '../../images/insta.png'
import { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = () =>{
    let location = useLocation();
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        setLoaded(true)
    },[])
    
    return(
            <div className={`${loaded?'':"opacity-0"} z-10 duration-3000 fixed w-screen justify-end p-4 items-center space-x-5 hidden md:flex`}>
                <p className={`${location.pathname=="/"?"underline":""} text-white text-xl`}>
                    <Link to="/">
                        Home
                    </Link>
                </p>
                <p className={`${location.pathname=="/about"?"underline":""} text-white text-xl`}>
                    <Link to="/about">
                        Bio
                    </Link>
                </p>
                <p className={`${location.pathname=="/gallery"?"underline":""} text-white text-xl`}>
                    <Link to="/gallery">
                        Gallery
                    </Link>
                </p>
                <p className={`${location.pathname=="/bookings"?"underline":""} text-white text-xl`}>
                    <Link to="/bookings">
                        Bookings
                    </Link>
                </p>
                
                <a href="https://www.instagram.com/sui.ink/" target='_blank' rel="noreferrer" className=''>
                    <div className="h-6 w-6">
                        <img src={insta} alt="" />
                    </div>
                </a>

                <h1 className="text-md text-white underline font-mono">
                    <a href="https://www.instagram.com/sui.ink/">
                        STORE
                    </a>
                </h1>
            </div>
    )
}
export default Header;
