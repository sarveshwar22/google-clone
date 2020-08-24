import React from 'react'
import './SearchPage.css'


import {useStateValue} from "./StateProvider"
import useGoogleSearch from './useGoogleSearch';
import Response from './response';

function SearchPage(){

    const [{term},dispatch] = useStateValue();
    //const {data} = useGoogleSearch(term);//live api call

    const data = Response;


    return(<div className='searchPage'>
        <div className='searchPage_header'>
            <h1>{term}</h1>
        </div>
        <div className='searchPage_results'>

        </div>
    </div>)
}

export default SearchPage;