import React, { useState } from 'react'
import './Search.css'

import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

import {actionTypes } from '../reducer';


function Search({hideButtons = false})
{
    const[{},dispatch] = useStateValue();

    const [input, setInput] = useState("")
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({type:actionTypes.SET_SEARCH_TERM,term:input})

        history.push('/search')
    }

    return(
        <form className='search'>
            <div className='search_input'>
                {/*search_input_icon */}
                <ImageSearchIcon className="search_input_icon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <HeadsetMicIcon />
            </div>
            {!hideButtons ? (<div className="search_buttons">
                <Button type='submit' variant="outlined" onClick={search}>Search on Google</Button>
                <Button variant="outlined">I'm Feeling Crazy</Button>
            </div>):(<div className="search_buttons">
                <Button className="search_buttons_hidden" type='submit' variant="outlined" onClick={search}>Search on Google</Button>
                <Button className="search_buttons_hidden" variant="outlined">I'm Feeling Crazy</Button>
            </div>)}
            
        </form>
    )
}

export default Search