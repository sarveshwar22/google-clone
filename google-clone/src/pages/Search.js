import React, { useState } from 'react'
import './Search.css'

import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

import { Button } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

function Search()
{
    const [input, setInput] = useState("")
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

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
            <div className="search_buttons">
                <Button type='submit' variant="outlined" onClick={search}>Search on Google</Button>
                <Button variant="outlined">I'm Feeling Crazy</Button>
            </div>
        </form>
    )
}

export default Search