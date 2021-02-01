import classes from './Cast.module.css';
import NonClickableThumbnail from '../Thumbnail/NonClickableThumbnail';

const Cast = (props) => {
    return (
        <div className={classes.Cast}>
            <h3>Cast</h3>
            <ul className={classes.CastList}>
            {
                props.cast.map((cast, index) => {
                    // Destructuring
                    const { image, name } = cast.person;

                    return (
                        <li key={index}>
                            <NonClickableThumbnail
                                imageURL={image}
                                caption={name}
                            />
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Cast;