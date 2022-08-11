import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Story = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/stories/${location.state.story.id}`)
      .then((res) => {
      })
      .catch(() => {
      })
      .finally(() => {
        navigate('/')
      })
  }
  return (
    <div className='container'>
      <h1 className='text-center'>Story Show Page</h1>
      <div className='card'>
      <div className = 'card-header text-center'>
      <p>{location.state.story.caption}</p>
      </div>
      <div className = 'card-body text-center'>
        <img key={Story.id} src={location.state.img} className='rounded' style={{ height: '500px' }} />
      </div>
      <div className = 'card-footer text-center'>
      <button onClick={handleDelete} className = 'btn btn-success btn-sm'>
          Delete
      </button>
      </div>
      </div>
      <div className='text-center'>
        <button onClick={() => navigate(-1)} className = 'btn btn-success mt-2'>
          Back
        </button>
      </div>
    </div>
  )
}

export default Story
