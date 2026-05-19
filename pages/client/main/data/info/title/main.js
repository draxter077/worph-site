export default function title(t){
    let style = `
        {
            font-size:12px;
            color:var(--colorWhite);
            margin:0px 0px 5px 0px;
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}