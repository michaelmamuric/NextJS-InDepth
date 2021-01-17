import axios from 'axios';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

// Server Side Rendering
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps = async(context) => {

    // Get country code from context variable
    const countryCode = context.params.country || 'ca';

    try {
        const response = await axios.get(`http://api.tvmaze.com/schedule?country=${countryCode}`);
        
        // Return notFound if no data available
        if(response.data.length === 0) {
            return {
                notFound: true
            }
        }
        
        // Response obtained from API call will be sent to Country as props
        return {
            props: {
                shows: response.data
            }
        }
    } catch(error) {
        return {
            notFound: true
        }  
    }
    
}

const Country = (props) => {
    return (
        <ul>
        {
            props.shows.map((showItem, index) => {
                return (
                    <li key={index}>
                        <Thumbnail imageURL={showItem.show.image} caption={showItem.name} />
                    </li>
                )
            })
        }
        </ul>
    )
}

export default Country;