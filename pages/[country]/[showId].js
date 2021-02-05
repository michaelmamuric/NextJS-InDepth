import classes from './index.module.css';
import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast/Cast';

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
                error: error.error
            }
        }
    }
}

const ShowDetails = (props) => {
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
            <Cast cast={_embedded.cast} />
        </div>
    )
}

export default ShowDetails;