import insta from '../../images/insta.png'
import { useState, useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import useScroll from '../../hooks/useScroll'

const Header = () =>{
    const {scroll} = useScroll();
    let location = useLocation();
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        setLoaded(true)
    },[])
    
    return(
            <div className={`${loaded?'':"opacity-0"} ${scroll?"bg-black":""} bg-opacity-60 z-10 duration-300 fixed w-screen justify-end p-4 items-center space-x-5 hidden md:flex`}>
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

                {/*
                <h1 className="text-white text-xl">
                    <a href="https://www.instagram.com/sui.ink/">
                        Store
                    </a>
                </h1>*/
                }

                <p className={`${location.pathname=="/soon"?"underline":""} text-white text-xl`}>
                    <Link to="/soon">
                        Store
                    </Link>
                </p>

                <a href="https://www.instagram.com/sui.ink/" target='_blank' rel="noreferrer" className=''>
                    <div className="h-6 w-6">
                        <img src={insta} alt="" />
                    </div>
                </a>

            </div>
    )
}
export default Header;
