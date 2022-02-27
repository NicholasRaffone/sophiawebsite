import mainimg from '../../images/main.jpg'
import FadeIn from '../common/fadein'
import {Link} from 'react-router-dom'
import insta from '../../images/insta.png'
const Main = () =>{
    return(
        <FadeIn>
            <div className="hidden md:inline-block w-2/3 h-screen">
                <img src={mainimg} alt="" className="h-full w-full object-contain md:object-cover object-top md:object-right"/>
            </div>
            <div className="md:w-1/3 md:float-right h-screen">
                <div className="md:w-fit flex flex-col h-full justify-center md:mt-4 lg:mt-0 md:space-y-3 md:pr-4 lg:pr-0">
                    <h1 className="text-5xl lg:text-6xl text-white text-center mb-2 md:my-0">Sophia Sui</h1>
                    <h1 className="text-3xl mb-4 md:mb-0 md:text-2xl text-white text-center">I powerlift and draw stuff</h1>
                    <h1 className="hidden md:block text-center md:self-end md:w-fit hover:translate-x-3 hover:-translate-y-2 cursor-pointer transform text-4xl text-white border-b border-black hover:border-white duration-300">
                        <Link to="/about">
                            Bio
                        </Link>
                    </h1>
                    <h1 className="hidden md:block text-center md:self-end md:w-fit hover:translate-x-3 hover:-translate-y-2 cursor-pointer transform text-4xl text-white border-b border-black hover:border-white duration-300">
                        <Link to="/gallery">
                            Gallery
                        </Link>
                    </h1>
                    <h1 className="hidden md:block text-center md:self-end md:w-fit hover:translate-x-3 hover:-translate-y-2 cursor-pointer transform text-4xl text-white border-b border-black hover:border-white duration-300">
                        <Link to="/bookings">
                            Bookings
                        </Link>
                    </h1>
                    <div className='md:hidden self-center flex space-x-5 items-center'>
                        <a href="https://www.instagram.com/sui.ink/" target='_blank' rel="noreferrer" className=''>
                            <div className="h-8 w-8">
                                <img src={insta} alt="" />
                            </div>
                        </a>
                        <h1 className="text-xl text-white font-mono underline">
                            <a href="https://www.instagram.com/sui.ink/" target='_blank' rel="noreferrer" className=''>
                                STORE
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
export default Main
