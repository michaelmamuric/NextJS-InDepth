const Thumbnail = (props) => {
    return (
        <>
            {
                props.imageURL !== null &&
                <div>
                    <img src={props.imageURL.medium} alt={props.caption} className="ThumbnailImg" />
                    <h4 className="Caption">{props.caption}</h4>

                    {/* Using style jsx */}
                    <style jsx>{`
                        .ThumbnailImg {
                            width: 100%;
                        }

                        .Caption {
                            text-align: center;
                        }
                    `
                    }
                    </style>
                </div>
            }
        </>
    )
}

export default Thumbnail;