import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const Home = () => {
  return (
    <div className='flex justify-start items-center h-full relative'>
        <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home
