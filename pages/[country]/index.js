import axios from 'axios';
import classes from './index.module.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import CustomError from '../_error';

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
                props: {
                    statusCode: 404
                }
            }
        }
        
        // Response obtained from API call will be sent to Country as props
        return {
            props: {
                shows: response.data,
                country: countryCode
            }
        }
    } catch(error) {
        return {
            props: {
                statusCode : error.response ? error.response.status : 500
            }
        }
    }
    
}

const Country = (props) => {

    // statusCode is set when an error is encountered
    if(props.statusCode !== null) {
        // Use CustomError component found in _error.js
        return <CustomError statusCode={props.statusCode} />;
    }

    // Destructure for easier referencing
    const { country, shows } = props;

    return (
        <ul className={classes.Grid}>
        {
            shows.map((showItem, index) => {
                return (
                    <li className={classes.ListItem} key={index}>
                        {/* Match URL to /[country]/[showId].js */ }
                        <Thumbnail 
                            imageURL={showItem.show.image !== null ? showItem.show.image : undefined}
                            caption={showItem.name}
                            href="/[country]/[showId]"
                            as={`/${country}/${showItem.show.id}`}
                        />
                    </li>
                )
            })
        }
        </ul>
    )
}

export default Country;