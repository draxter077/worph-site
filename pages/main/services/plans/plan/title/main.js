export default function title(t){
    let style = `
        {
            font-size:26px;
            color:var(--colorBlue);
            font-weight:900;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}