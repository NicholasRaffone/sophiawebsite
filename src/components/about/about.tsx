import beach from '../../images/beach.png'
import FadeIn from '../common/fadein'
const About = () =>{
    return(
        <FadeIn>
            <div className='flex h-10/12 md:min-h-screen flex-row-reverse'>
                <div className='flex-1'>
                    <div className='pt-20 md:pt-0 md:fixed bg-black top-20 right-10 md:w-[27em] lg:w-[40em] p-5'>
                        <p className="text-4xl md:text-2xl lg:text-6xl text-white mb-3 md:my-3">Bio</p>
                        <p className="md:text-sm lg:text-xl text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <img src={beach} alt="" className='flex-1 h-full w-full object-cover object-left-bottom md:object-bottom'/>
                </div>
            </div>
        </FadeIn>
    )
}
export default About;
