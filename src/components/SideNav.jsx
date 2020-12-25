import React from 'react'

const SideNav = () => {
    return (
        <div className="SideNav">
            <nav className="flex justify-between ">
                <img className="w-6 h-6" src="/assets/menu.svg" alt="menu"/>
                <img className="w-6 h-6" src="/assets/new-note.svg" alt="new-note"/>

            </nav>
        </div>
    )
}

export default SideNav
