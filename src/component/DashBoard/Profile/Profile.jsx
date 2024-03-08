import { useNavigate } from "react-router-dom"
import useAuth from '../../../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../../shared/Loader/Loader'
import { useGetSingleUserQuery } from '../../Auth/authApiSlice'
import './Profile.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    let content
    const navigate = useNavigate()
    const [email] = useAuth()
    const {data: user , error , isLoading}  = useGetSingleUserQuery(email)
    
    if(isLoading){
      return <Loader />
    }
    const handleChange = (event) => {
      // setValue(event.target.value);
      // console.log(event.target.value)
      navigate(`user/${event.target.value}`)
    }
    content = (
      <div className='profile-container'>
          <div className='profile-data'>
            
              <div className='profile-link'>
                <FontAwesomeIcon onClick={() => navigate('user/settings')} icon={faGear}/>
                <select onChange={handleChange}>
                  <option value="">Check</option>
                  <option value="marks">Your Marks</option>
                  <option value="LeaderBoard">Leader Board</option>
                  <option value="analytics">Analytics</option>
                </select>
              </div>

              <div className="data-text">
                <h2>{user?.first_name}</h2>
                <h2>Email:  {user?.email}</h2>
                <h2>Mobile: {user?.number}</h2>
                <h2>Roles:  {user?.role?.join(', ')}</h2>
              </div>

          </div>
      </div>
    )

    return content
}

export default Profile