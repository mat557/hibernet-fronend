import { jwtDecode } from "jwt-decode"
import { useSelector } from "react-redux"

const useAuth = () => {
    const token = useSelector((state)=>state?.auth?.token)
    let email = ''
    let roles = {}
    let isAdmin =   false
    let isTeacher = false
    let isStudent = false
    
    if(token){
        const decoded = jwtDecode(token)
        email = decoded.email
        roles = decoded?.role
        return [email,roles,isAdmin,isStudent,isTeacher]
    }
    return [email,roles,isAdmin,isStudent,isTeacher]
}

export default useAuth