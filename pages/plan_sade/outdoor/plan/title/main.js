export default function title(t){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
            font-weight:900;
            padding:5px 15px;
            margin:0px 0px 10px 0px;
            border-bottom:1px solid var(--colorBlue);
        }`

    const title = cE("div",style)
    title.innerHTML = t
    return(title)
}