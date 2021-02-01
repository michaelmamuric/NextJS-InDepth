import classes from './Thumbnail.module.css';
import Link from 'next/link';

const Thumbnail = (props) => {

    // Destructuring for easier referencing
    const { imageURL, caption, href, as } = props;

    return (
        <div className={classes.Center}>
            {/* Match URL to /[country]/[showId].js */}
            <Link href={href} as={as}>
                <a>
                    <img
                        src={imageURL !== undefined ? imageURL.medium : 'https://via.placeholder.com/210x295?text=?'}
                        alt={caption} />
                    <div className={classes.Caption}>{caption}</div>
                </a>
            </Link>
        </div>
    )
}

export default Thumbnail;