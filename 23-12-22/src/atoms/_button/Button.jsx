export const Button = (props) =>{

    const {
        children = ""
    } = props;

    return(
        <button className="btnDone">
            {children}
        </button>
    )
}