import React from 'react'
import SideNav from './SideNav'
import MainContent from './MainContent'

import './GetStarted.scss'

const GetStarted = () => {
    return (
        <div className='GetStarted border-t-2 border-gray-400'>
            <SideNav />
            <MainContent />
        </div>
    )
}

export default GetStarted