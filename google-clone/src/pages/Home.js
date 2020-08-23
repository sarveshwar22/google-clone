import React from 'react'
import './Home.css'

import { Link } from "react-router-dom";


function Home()
{
    return (
        <div className='home'>
            <h1>This is home page ok</h1>
            <h1>dsc</h1>
            <div className = 'home_header'>
                
                <div className = 'home_header_left'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    
                </div>
                <div className='home_header_right'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    {/*Icon*/}
                    {/*Avatar*/}
                    
                </div>    
            </div>
            <div className='home_body'>

            </div>
        </div>
    )
}

export default Home