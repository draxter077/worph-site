export default function title(t){
    let style = `
        {
            font-size:18px;
            color:var(--colorWhite);
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}