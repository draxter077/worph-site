export default function title(){
    let style = `
        {
            font-size:21px;
            color:var(--colorWhite);
        }`

    const title = cE("div",style)
    title.innerHTML = "Informações gerais"
    return(title)
}