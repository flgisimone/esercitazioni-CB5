import "./button.css"

export function Button(props){

    const{
        className = "",
        variant = "none",
        ...otherAttributes
    } = props

    return(
        <button className={`button button--variant-${variant} ${className}`}
        {...otherAttributes}></button>
    )

}