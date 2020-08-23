import React from 'react'
import './Home.css'

import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Home()
{
    return (
        <div className='home'>
            <h1>This is home page</h1>

            <div className='home_header'>
                <div className='home_header_left'>
                    {/*Link */}
                    {/*Link */}
                <div className='home_header_right'>
                    {/*Link*/}
                    {/*Link*/}
                    {/*Icon*/}
                    {/*Avatar*/}
                    
                </div>    
                </div>

            </div>
            <div className='home_body'>

            </div>
        </div>
    )
}

export default Home