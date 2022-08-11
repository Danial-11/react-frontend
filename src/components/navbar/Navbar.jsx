import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getFollowersApi } from '../../api/followersApi'

const Navbar = () => {
  const navigate = useNavigate()
  const handleShowFollowers = () => {
    getFollowersApi().then((res) => {
      navigate('/followers', {
        state: res.data
      })
    })
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https/google.com">
          Instagram Clone
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={handleShowFollowers}
                href={handleShowFollowers}
              >
                Followers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https/google.com">
                Sign in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https/google.com">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
