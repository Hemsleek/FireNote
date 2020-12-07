import React from 'react'
import { Link } from 'react-router-dom'

import './LandingPage.scss'

const LandingPage = () => {
    const navBarEl='Contact Us,Help,Blog,Log in,Sign Up'.split(',')
    return (
        <div className='LandingPage mx-auto'>
            <nav className="flex items-center h-20">
                <img src="/assets/simplelogo.png" alt="logo" className="w-6 h-6 mr-3" />
                <span className="text-xl cursor-pointer">Simplenote</span>
                <span className="flex-grow"/>
                {
                    navBarEl.map((item, itemIndex) => 
                    (<span 
                        className={`ml-6 text-sm cursor-pointer hover:text-gray-400 ${item=='Sign Up'? 'border-2 rounded border-gray-300 py-1 px-3 ': item=='Log in'?'border-l-2 border-gray-300 py-1 px-3.5':''}`} key={`navItem_${itemIndex}`} >
                            {item}
                    </span>))
                }
            </nav>
            <main className="text-center  mt-16">
                <header className="text-6xl font-bold">
                    The simplest way to <br />keep notes
                </header>
                <p className="my-8 text-lg">
                All your notes, synced on all your devices. Get Simplenote now for iOS,<br /> Android, Mac, Windows, Linux, or in your browser.
                </p>
                <button className="bg-blue-600 text-white rounded-sm py-2 px-5 hover:bg-blue-800 ">
                    <Link to='/get_started' >Sign up now</Link>
                </button>
            </main>
        </div>
    )
}

export default LandingPage