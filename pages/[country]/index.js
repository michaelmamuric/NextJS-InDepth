import axios from 'axios';
import classes from './index.module.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Header from '../../components/Header/Header';

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
                shows: response.data,
                country: countryCode
            }
        }
    } catch(error) {
        return {
            notFound: true
        }  
    }
    
}

const Country = (props) => {
    // Destructure for easier referencing
    const { country, shows } = props;

    return (
        <>
        <Header />
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
        </>
    )
}

export default Country;