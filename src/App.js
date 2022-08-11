import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Stories from './components/stories/Stories'
import Story from './components/story/Story'
import Followers from './components/followers/Followers'
import Navbar from './components/navbar/Navbar'

function App () {
  const ways = {
    stories: '/',
    story: '/story/:id',
    followers: '/followers'
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={ways.stories} element={<Stories />} />
        <Route path={ways.story} element={<Story />} />
        <Route path ={ways.followers} element={<Followers /> } />
      </Routes>
    </div>
  )
}

export default App
