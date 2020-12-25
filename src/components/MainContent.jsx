import React from 'react'

const MainContent = () => {
    const actions = 'clock,download-icon,delete,info'.split(',')
    return (
        <div className="MainContent">
            <nav className="flex items-center ">
                <img className="w-6 h-6" src="/assets/slider.svg" alt="menu"/>
                <span className='flex-grow'/>
                {
                    actions.map((action , actionIndex) => ( <img key={`nav_action${actionIndex}`} className="w-6 h-6" src={`/assets/${action}.svg`} alt={action} />))
                }
               

            </nav>
        </div>
    )
}

export default MainContent
