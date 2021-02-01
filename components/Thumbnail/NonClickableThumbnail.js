import classes from './Thumbnail.module.css';

const NonClickableThumbnail = (props) => {

    // Destructuring for easier referencing
    const { imageURL, caption } = props;

    return (
        <div style={{padding: '15px'}}>
            <img
                src={imageURL !== undefined ? imageURL.medium : 'https://via.placeholder.com/210x295?text=?'}
                alt={caption} />
            <div>{caption}</div>
        </div>
    )
}

export default NonClickableThumbnail;