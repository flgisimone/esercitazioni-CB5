export const Status = (props) =>{

    const {
        children = "",
        ...attrs
    } = props;

    return(
        <span className="statusText" {...attrs}>
            {children}
        </span>
    )
}