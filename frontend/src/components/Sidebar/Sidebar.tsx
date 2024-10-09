import React from 'react'
import SearchComponent from './SearchComponent'
import Conversations from './Conversations'
import Options from './Options'

const Sidebar = () => {
  return (
    <div className='sidebar w-[28rem] h-screen p-5 border-r border-gray-700 overflow-auto flex flex-col'>
      <SearchComponent />
      <div className='divider m-0'></div>
      <Conversations />
      <Options />
    </div>
  )
}

export default Sidebar
