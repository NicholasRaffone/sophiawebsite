import {useState} from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { Link, useLocation } from 'react-router-dom'
const MobileNavbar = () =>{
    let location = useLocation();
    const [isOpen, setOpen] = useState(false)
    const clickHandler = () =>{
        setOpen(false);
    }
    return(
        <div className="w-screen z-10 md:hidden" onScroll={()=>console.log('scrollin')}>
            <div className="p-3 z-50 w-screen flex items-center fixed ">
                <Hamburger size={35} color="#ffffff" toggled={isOpen} toggle={setOpen} />
            </div>
            <div className={`h-screen bg-gray-900 flex z-30 flex-col space-y-5 fixed w-60 pt-20 pl-5 duration-500 transform ${!isOpen?"-translate-x-full ":""}`}>
                <p className={`${location.pathname==="/"?"underline":""} text-3xl text-white ml-3`}  onClick={clickHandler}>
                    <Link to="/">Home</Link>
                </p>
                <p className={`${location.pathname==="/about"?"underline":""} text-3xl text-white ml-3`}  onClick={clickHandler}>
                    <Link to="/about">Bio</Link>
                </p>
                <p className={`${location.pathname==="/gallery"?"underline":""} text-3xl text-white ml-3`} onClick={clickHandler}>
                    <Link to="/gallery">
                        Gallery
                    </Link>
                </p>
                <p className={`${location.pathname==="/bookings"?"underline":""} text-3xl text-white ml-3`} onClick={clickHandler}>
                    <Link to="/bookings">
                        Bookings
                    </Link>
                </p>
                {
                /**  
                <a className='text-3xl text-white ml-3' href="https://google.com" target="_blank" rel="noreferrer" onClick={clickHandler}>
                    Store
                </a>
                 */  
                }
                <p className={`text-3xl text-white ml-3`} onClick={clickHandler}>
                    <Link to="/soon">
                        Store
                    </Link>
                </p>
                
                <a className='text-3xl text-white ml-3' href="https://www.instagram.com/sui.ink/" target="_blank" rel="noreferrer" onClick={clickHandler}>
                    Instagram
                </a>
            </div>
        </div>
    )
}
export default MobileNavbar;
