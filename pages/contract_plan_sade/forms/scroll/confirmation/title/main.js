export default function title(){
    let style = `
        {
            font-size:21px;
            font-weight:900;
            color:var(--colorBlue);
        }`

    const title = cE("div",style)
    title.innerHTML = "A NOME_EMPRESA estará de cara nova em breve!"
    return(title)
}