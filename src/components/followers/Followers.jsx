import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Followers = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const followers = location.state
  return (
    <div className='text-center'>
      <div>
        <h1>All Followers</h1>
      </div>
      <hr />
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {followers.map((follower) => (
              <tr key={follower.id}>
                <td>{follower.username}</td>
                <td>{follower.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={() => navigate(-1)} className='btn btn-success'>
        Back
      </button>
    </div>
  )
}

export default Followers
