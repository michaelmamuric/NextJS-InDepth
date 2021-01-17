import axios from 'axios';

// Server Side Rendering
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps = async(context) => {
    const response = await axios.get('http://api.tvmaze.com/schedule?country=JP');
    
    // Response obtained from API call will be sent to Country as props
    return {
        props: {
            shows: response.data
        }
    }
}

const Country = (props) => {
    console.log(props.shows);

    return (
        <h1>Country Test</h1>
    )
}

export default Country;