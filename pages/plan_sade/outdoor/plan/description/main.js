export default function description(d){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
            text-align:center;
        }`

    const description = cE("div",style)
    description.innerHTML = d
    return(description)
}