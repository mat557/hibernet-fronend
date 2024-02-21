import { useEffect } from 'react'
import { useGetUsersQuery } from '../../Auth/authApiSlice'
import Loader from '../../../shared/Loader/Loader'
import './User.css'


const User = () => {
    let content
    const {data: users , isLoading , isError , isSuccess , error} = useGetUsersQuery()
    
    if(isLoading && !isSuccess){
        content = <Loader />
    }



    content = (
        <div className='users-table-holder'>
            <table className='users-table'>
                <thead>
                    <tr>
                        <th>serial</th>
                        <th>name</th>
                        <th>email</th>
                        <th>number</th>
                        <th>role</th>
                        <th>blog</th>
                        <th>other</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.users?.map((user, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.first_name}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td><button>action</button></td>
                            <td><button>action</button></td>
                            <td><button>action</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    )
    return content
}

export default User