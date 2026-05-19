export default function attribute(a){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }`

    const attribute = cE("div",style)
    attribute.innerHTML = a
    return(attribute)
}