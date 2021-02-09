import classes from './Thumbnail.module.css';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';

const Thumbnail = (props) => {

    // Destructuring for easier referencing
    const { imageURL, caption, href, as } = props;

    return (
        <Grid container>
            <Grid item xs={12} className={classes.Center}>
            {/* Match URL to /[country]/[showId].js */}
            <Link href={href} as={as}>
                <a>
                    <img
                        src={imageURL !== undefined ? imageURL.medium : 'https://via.placeholder.com/210x295?text=?'}
                        alt={caption} />
                </a>
            </Link>
            </Grid>
            <Grid item xs={12} className={classes.Caption}>
               <Link href={href} as={as}>
                   <a>{caption}</a>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Thumbnail;