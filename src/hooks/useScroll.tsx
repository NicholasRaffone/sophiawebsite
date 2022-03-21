import React, {useState, useEffect} from 'react'

const useScroll = () =>{
    const scrollval = 50;
    const [scroll, setScroll] = useState(false)
    const listenScrollEvent = (event:Event) => {
        if (window.scrollY < scrollval) {
            setScroll(false)
        } else if (window.scrollY > scrollval) {
            setScroll(true)
        } 
      }
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);
      
    return {scroll};
}
export default useScroll;
