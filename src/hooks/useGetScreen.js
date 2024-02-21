
import { useEffect, useState } from 'react'

const useGetScreen = () => {
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)
    const [small,setSmall]= useState(false)

    const handleScroll = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=>{
        window.addEventListener('resize',handleScroll)
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
              setSmall(window.pageYOffset > 200)
            );
          }

        return () =>{
            window.removeEventListener('resize',handleScroll)
        }
    },[])

    return [small,width,height]
}

export default useGetScreen