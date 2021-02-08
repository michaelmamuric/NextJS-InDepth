import classes from './index.module.css';
import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast/Cast';
import Error from 'next/error';
import CustomError from '../_error';

export const getServerSideProps = async(context) => {
    try {
        // Get show ID from context
        const showId = context.query.showId;
        const response = await axios.get(`http://api.tvmaze.com/shows/${showId}?embed=cast`);
        return {
            props: {
                show: response.data
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

const ShowDetails = (props) => {

    // statusCode is set when an error is encountered
    if(props.statusCode) {
        // Use CustomError component found in _error.js
        return <CustomError statusCode={props.statusCode} />;
    }

    // Destructuring
    const { name, image, summary, _embedded } = props.show;

    return (
        <div className={classes.ShowDetail}>
            <div className={classes.Poster}
                style={{ backgroundImage: `url(${image.original})` }}
            ></div>
            <h1>{name}</h1>
            {
                /* Summary is enclosed in a paragraph (p) tag */
                parse(summary)
            }
            {
                /* Check if cast list is available from API response */
                _embedded.cast.length > 0 && <Cast cast={_embedded.cast} />
            }
        </div>
    )
}

export default ShowDetails;