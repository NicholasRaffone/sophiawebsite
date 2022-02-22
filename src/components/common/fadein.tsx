import React, {useState, useEffect} from 'react'

const FadeIn:React.FC = ({children})=>{
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        setLoaded(true)
    },[])
    return(
        <div className="bg-black">
            <div className={`h-screen ${loaded?"":"opacity-0"} duration-3000`}>
                {children}
            </div>
        </div>
    )
}
export default FadeIn
