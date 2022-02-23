import portrait from '../../images/Self-portrait.png'
import angel from '../../images/angel.png'
import ink from '../../images/ink.png'
import pastel from '../../images/pastel.png'
import cpencil from '../../images/cpencil.png'
import FadeIn from '../common/fadein'
const Portfolio = () =>{
    return(
        <FadeIn>
            <div className='pt-20 pb-3 min-h-screen bg-black'>
                <h1 className="text-6xl text-white text-center mb-5 md:mb-3">Gallery</h1>
                <div className="grid md:grid-cols-2 gap-y-20">
                    <div className="flex justify-center items-center">
                        <div className="h-80 w-80 ">
                            <img src={portrait} alt="" className='h-80 w-auto mx-auto'/>
                            <p className='text-center text-white text-2xl mt-2'>Self-Portrait, 2021</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-80 w-80 ">
                            <img src={angel} alt="" className='h-80 w-auto mx-auto'/>
                            <p className='text-center text-white text-2xl mt-2'>Angel</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-80 w-80 ">
                            <img src={ink} alt="" className='h-80 w-auto mx-auto'/>
                            <p className='text-center text-white text-2xl mt-2'>Ink</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-80 w-80 ">
                            <img src={pastel} alt="" className='h-80 w-auto mx-auto'/>
                            <p className='text-center text-white text-2xl mt-2'>Pastel</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="h-80 w-80 ">
                            <img src={cpencil} alt="" className='h-80 w-auto mx-auto'/>
                            <p className='text-center text-white text-2xl mt-2'>Colored Pencil II</p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
export default Portfolio
