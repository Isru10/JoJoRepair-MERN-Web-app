// import { useParams } from 'react-router-dom'
// import EditUserForm from './EditUserForm'
// import { useGetUsersQuery } from './usersApiSlice'
// import PulseLoader from 'react-spinners/PulseLoader'
// // import useTitle from '../../hooks/useTitle'

// const EditUser = () => {
//     // useTitle('techNotes: Edit User')

//     const { id } = useParams()

//     const { user } = useGetUsersQuery("usersList", {
//         selectFromResult: ({ data }) => ({
//             user: data?.entities[id]
//         }),
//     })

//     if (!user) return <PulseLoader color={"#FFF"} />

//     const content = <EditUserForm user={user} />

//     return content
// }
// export default EditUser

// BEFORE 

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import EditUserForm from './EditUserForm'
import { PulseLoader } from 'react-spinners'

const EditUser = () => {
    const { id } = useParams()

    const user = useSelector(state => selectUserById(state, id))

    const content = user ? <EditUserForm user={user} /> : <PulseLoader color={"#FFF"} />

    return content
}
export default EditUser