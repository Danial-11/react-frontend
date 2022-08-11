import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { getStoryApi } from '../../api/storyApi'
// import { getCreateStoryApi } from '../../api/createStoryApi'
// import { Card, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Stories = () => {
  // const [isValid, setIsValid] = useState(true)
  const navigate = useNavigate()
  const [stories, setStories] = useState([])
  const [photos, setPhotos] = useState([])
  // const [content, setContent] = useState('')
  // const [img, setImg] = useState('')

  useEffect(() => {
    let mount = true
    getStoryApi().then((res) => {
      if (mount) {
        setStories(res.data[0])
        setPhotos(res.data[1])
      }
    })
    return () => (mount = false)
  }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (content.length > 0) {
  //     getCreateStoryApi(content)
  //       .then((res) => {
  //         setStories([...stories, res.data])
  //       })
  //       .catch(() => {})
  //     setContent('')
  //     setImg('')
  //     setIsValid(true)
  //   } else {
  //     setIsValid(false)
  //   }
  // }

  // const handleContentChange = (e) => {
  //   setContent(e.target.value)
  // }
  // const handleChange = async e => {
  //   // setImg(e.target.files[0])
  //   const files = e.target.files
  //   const data = new FormData()
  //   data.append('file', files[0])
  //   data.append('upload_preset', 'xstsyf55')
  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/dani-cloud/image/upload',
  //     {
  //       method: 'POST',
  //       body: data
  //     }
  //   )
  //   const file = await res.json()
  //   setImg(file.secure_url)
  //   console.log(res)
  // }

  const handleShowStory = (story) => {
    const photo = photos.filter((photo) =>
      photo.imageable_id === story.id && photo.imageable_type === 'Story'
        ? photo.image.url
        : null
    )
    navigate(`/story/${story.id}`, {
      state: {
        story,
        img: photo[0].image.url
      }
    })
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <div className='col-xl-7 col-lq-8 col-md-10 col-sm-11'>
        <div className='card'>
          <div className='card-header'>Create story</div>
          <div className='card-body'>
            {/* <Card style={{ textAlign: 'center' }}>
              <TextField
                id="filled-textarea"
                label="Caption"
                placeholder="Write some good caption this time!"
                multiline
                variant="filled"
                fullWidth
                onChange={handleContentChange}
              />
              {!isValid && <p>Invalid</p>}
            </Card>
            <form onSubmit={handleSubmit}>
              <input
                type='file'
                name='file'
                onChange={handleChange}
                style={{ marginTop: '10px', width: '90%' }}
                required
              />
            </form> */}
            <hr />
            <div className='card mt-5'>
              {stories.map((story) => (
                <div key={story.id} className='card-body hehehe'>
                <>
                  <FontAwesomeIcon
                    icon={faPlay}
                    onClick={() => handleShowStory(story)}
                    className='text-success text-center'
                  />
                  <div key={story.id} className='mt-2 text-center'>
                    {photos.map((photo) =>
                      photo.imageable_id === story.id &&
                      photo.imageable_type === 'Story'
                        ? (
                        <img
                            src={photo.image.url}
                            alt='alt'
                            className='rounded-circle m-2'
                            width='30%' />
                          )
                        : (
                        <></>
                          )
                    )}
                  <p className='m-2'>{story.caption}</p>
                    <hr />
                  </div>
                </>
              </div>
              ))}
              {/* {
                <img src={img} style={{ margin: '30px 0px 30px 330px' }} className = 'rounded-circle' width = '30%' />
              } */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Stories
