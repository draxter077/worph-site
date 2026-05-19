export default function value(v){
    let style = `
        {
            font-size:14px;
            color:var(--colorWhite);
            width:fit-content;
        }`

    const value = cE("div",style)
    value.innerHTML = v
    return(value)
}