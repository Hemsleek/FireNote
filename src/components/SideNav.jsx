import React from 'react'

const SideNav = () => {
    return (
        <div className="SideNav">
            <nav className="flex justify-between min-w-32">
                <img className="w-4 h-4" src="/assets/menu.svg" alt="menu"/>
                <img className="w-4 h-4" src="/assets/new-note.svg" alt="new-note"/>

            </nav>
        </div>
    )
}

export default SideNav
