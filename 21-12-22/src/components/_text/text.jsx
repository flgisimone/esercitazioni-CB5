const variantFont = {
    fontL: "font-l",
    fontM: "font-m",
    fontS: "font-s"
}

export const Text = (props) => {
    
    const{
        as = "span",
        variant = "fontL",
        ...otherAttributes
    } = props;

    const Tag = as;

    return(
        <Tag className = {`Text ${variantFont[variant] ?? ''}`}
        {...otherAttributes}>
        </Tag>
    )

}