import FadeIn from "../common/fadein";

const Bookings = () =>{
    return(
        <FadeIn>
            <div className="px-6">
                <p className="mb-3 text-5xl text-center md:text-left md:text-6xl text-white pt-20">Booking Info</p>
                <p className="my-3 text-3xl text-white">Tattoos</p>
                    <p className="text-xl text-white ml-5">Starting at 150AED, depends on size & design</p>
                <p className="my-3 text-3xl text-white">Temporary Ink Tattoos (Lasts 2-3 weeks)</p>
                    <p className="text-xl text-white ml-5">Starting at 50AED, depends on size & design</p>
                <p className="my-3 text-3xl text-white">Piercings</p>
                    <p className="text-xl text-white ml-5">Lobe: 80AED (50 + 30 for jewlery)</p>
                    <p className="text-xl text-white ml-5">Helix: 100AED (70 + 30 for jewlery)</p>
                    <p className="text-xl text-white ml-5">Any 2 with jewelry: 150AED</p>
                    <p className="text-xl text-white ml-5">Any 3 with jewelry: 200AED</p>
                <p className="my-3 text-3xl text-white">Art Commissions</p>
                    <p className="text-xl text-white ml-5">Book a consulting session for more details</p>
                <p className="my-3 text-xl text-white">(Prices subject to change)</p>
                <p className="text-3xl text-white text-center underline my-6">
                    <a href="http://www.google.com" target="_blank" rel="noreferrer">
                        Click here to book a session
                    </a>
                </p>
            </div>
        </FadeIn>
    )
}
export default Bookings;
