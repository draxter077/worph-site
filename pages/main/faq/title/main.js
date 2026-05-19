export default function title(){
    let style = `
        {
            font-size:24px;
            color:var(--colorWhite);
            font-weight:900;
            border-right:1px solid var(--colorBlue);
            border-left:1px solid var(--colorBlue);
            padding:5px 30px;
        }`

    const title = cE("div",style)
    title.innerHTML = "Perguntas frequentes"
    return(title)
}