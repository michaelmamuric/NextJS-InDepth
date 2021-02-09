import axios from 'axios';
import classes from './index.module.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import CustomError from '../_error';
import Grid from '@material-ui/core/Grid';
import nookies from 'nookies';

// Server Side Rendering
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export const getServerSideProps = async(context) => {

    // Get selectedCountry from cookie
    const { selectedCountry } = nookies.get(context);
    // Get country code from context variable
    const countryCode = context.query.country || selectedCountry || 'jp';

    try {
        const response = await axios.get(`https://api.tvmaze.com/schedule?country=${countryCode}`);
        
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
    if(props.statusCode) {
        // Use CustomError component found in _error.js
        return <CustomError statusCode={props.statusCode} />;
    }

    // Destructure for easier referencing
    const { country, shows } = props;

    return (
        <>
        <br />
        <Grid container>
        {
            shows.map((showItem, index) => {
                return (
                    <Grid key={index} item xs={12} sm={6}>
                        {/* Match URL to /[country]/[showId].js */ }
                        <Thumbnail 
                            imageURL={showItem.show.image !== null ? showItem.show.image : undefined}
                            caption={showItem.name}
                            href="/[country]/[showId]"
                            as={`/${country}/${showItem.show.id}`}
                        />
                    </Grid>
                )
            })
        }
        </Grid>
        </>
    )
}

export default Country;