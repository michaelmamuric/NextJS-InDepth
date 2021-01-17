const Thumbnail = (props) => {
    return (
        <div>
            {
                props.imageURL !== null &&
                <>
                    <img src={props.imageURL.medium} alt={props.caption} />
                    <h3>{props.caption}</h3>
                </>
            }
        </div>
    )
}

export default Thumbnail;