import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import { jwtDecode } from 'jwt-decode'
// import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {
        
        const decoded = jwtDecode(token)
        console.log(decoded.UserInfo)
        const { username, roles } = decoded.UserInfo

        console.log(roles[0])
        isManager = roles[0].includes('Manager')
        isAdmin = roles[0].includes('Admin')
        // isEmployer=roles
        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"
        console.log(isManager, isAdmin)

        return { username, roles, status, isManager, isAdmin }
    }

    return { username: '', roles: [], isManager, isAdmin, status }
}
export default  useAuth