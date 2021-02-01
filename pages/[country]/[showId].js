import classes from './index.module.css';
import axios from 'axios';

export const getServerSideProps = async(context) => {
    try {
        const response = await axios.get('http://api.tvmaze.com/shows/1?embed=cast');
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
    const { name, image } = props.show;

    return (
        <div className={classes.ShowDetail}>
            <div className={classes.Poster}
                style={{ backgroundImage: `url(${image.original})` }}
            ></div>
            <h1>{name}</h1>
        </div>
    )
}

export default ShowDetails;