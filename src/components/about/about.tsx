import beach from '../../images/beach.jpg'
import FadeIn from '../common/fadein'
import useViewportSizes from 'use-viewport-sizes'

const About = () =>{
    const [vpWidth, vpHeight] = useViewportSizes(1);
    return(
        <FadeIn>
            <div className='h-10/12 md:min-h-screen flex-row-reverse'>
                <img src={beach} alt="" className={`flex-1 ${vpHeight>vpWidth?"h-screen w-auto":"h-auto w-screen"} object-cover object-left-bottom md:object-bottom`}/>
                <div className='absolute inset-0 flex justify-center align-center md:hidden pb-12'>
                    <p className="bg-black text-white h-fit my-auto p-3 text-4xl">Bio</p>
                </div>
                <svg className="fixed md:hidden w-8 h-8 bottom-7 right-7 fill-white animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/></svg>
                <div className=''>
                    <div className='pt-8 md:pt-0 md:absolute bg-black top-20 right-5 md:w-[30em] lg:w-[40em] p-5'>
                        <p className="text-4xl md:text-2xl lg:text-5xl text-white mb-3 md:my-3">Bio</p>
                        <p className="md:text-xs lg:text-[1rem] text-white my-1 indent-2">Bonjour! This is Sophia. I am a second year philosophy and visual arts student with a minor in music at NYU Abu Dhabi. I also love lifting and scuba diving! I currently hold four world records in powerlifting, and am an ACE certified personal trainer and PADI certified rescue diver. </p>
                        <p className="md:text-xs lg:text-[1rem] text-white my-1 indent-2">Art-wise, I have been doodling stuff for as long as I can remember. I did have a few years of technical drawing practice back in middle school, and dabbled with ink pen, rubber stamp engraving, watercolor, acrylic, and spray paints, but my full-blown passion for art did not blossom until my very last years in high school. In fall 2018, I moved from Shenzhen, China to New Jersey, USA. At that time, I was very much into topics regarding adolescent mental health, especially depression, self-harm and eating disorders, and wanted to create works that somehow uncover the pain we are going through. Till this date, much of my works still share the sentiment. </p>
                        <p className="md:text-xs lg:text-[1rem] text-white my-1 indent-2">Since coming to NYUAD in January 2021, I have had more time than ever immersing myself in artistic production. I work primarily with watercolor and ink pen, and sometimes work with acrylic, oil pastel, and colored pencils. I enjoy capturing the fleeting moments of everyday experience. Apart from that, I’m fascinated with striking yet aesthetic representations of pain, suffering and brokenness, and are very much inspired by classical paintings and religious motifs.</p>
                        <p className="md:text-xs lg:text-[1rem] text-white my-1 indent-2">Long story short, I like to draw stuff. In September 2021, I started doing freehand temporary tattoos with Leinka Ink (not sponsored, hopefully one day). In December, I picked up a tattoo machine, and started to practice on faux skin (and myself). Around mid-February 2022,  I welcomed my first tattoo client, and am greatly blessed to have many bookings since. Same goes for piercing.</p>
                        <p className="md:text-xs lg:text-[1rem] text-white my-1 indent-2">Anyways, I really appreciate you being part of my journey! I’m now open for tattoos & piercings bookings and art commission. Send me a message for consultation, and let’s do some cool stuff together 🖤</p>
                        <p className="md:text-xs lg:text-[1rem] text-white my-1">Sincerely,<br/>Sophia</p>
                    </div>
                </div>

            </div>
        </FadeIn>
    )
}
export default About;
