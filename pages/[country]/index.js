import { useEffect } from 'react';
import axios from 'axios';

const Country = () => {

    // Traditional componentDidMount
    // Will fetch data on client side
    useEffect(async() => {
        const response = await axios.get('http://api.tvmaze.com/schedule?country=JP')
        console.log('Response', response)
    }, [])

    return (
        <h1>Country Test</h1>
    )
}

export default Country;