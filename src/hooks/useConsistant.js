import React, { useEffect, useState } from 'react'

const useConsistant = () => {
    const [consistant,setConsistant] = useState(JSON.parse(localStorage.getItem("consist")) || false)
    
    
    useEffect(()=>{
        localStorage.setItem("consist", JSON.stringify(consistant))
    },[consistant])

    return [consistant,setConsistant]
}

export default useConsistant