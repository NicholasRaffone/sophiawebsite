import cat1 from '../../images/cat1.png'
import cat2 from '../../images/cat2.png'
import cat3 from '../../images/cat3.png'
import cat4 from '../../images/cat4.png'
import FadeIn from '../common/fadein'
const Error = () =>{
    const cats = [
        cat1,
        cat2,
        cat3,
        cat4
    ]
    return(
        <FadeIn>
            <div className="h-screen w-screen flex justify-center items-center flex-col px-4 space-y-1 md:space-y-3">
                    <p className="text-8xl text-white text-center">404</p>
                    <p className="text-4xl text-white text-center">Sorry, we couldn't find what you're looking for. Here's Brownie instead.</p>
                    <img src={cats[Math.floor(Math.random()*cats.length)]} alt="" className='h-40 lg:h-60 w-auto'/>
            </div>
        </FadeIn>
    )
}
export default Error;
