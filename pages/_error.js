const CustomError = (props) => {
    return (
        <div>
            <h1>{props.statusCode}: Oops! There was an error.</h1>
        </div>
    )
}

export default CustomError;