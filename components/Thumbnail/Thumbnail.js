import classes from './Thumbnail.module.css';

const Thumbnail = (props) => {
    return (
        <>
        <div className={classes.Center}>
            <img 
                src={props.imageURL !== undefined ? props.imageURL.medium : 'https://via.placeholder.com/210x295?text=?'} 
                alt={props.caption}
                
            />
        </div>
        <h4 className={classes.Caption}>{props.caption}</h4>
        </>
    )
}

export default Thumbnail;