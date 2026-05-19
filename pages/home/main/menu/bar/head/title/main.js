export default function title(){
    let style = `
        {
            font-size:22px;
            color:var(--colorWhite);
        }`

    const title = cE("div",style)
    title.innerHTML = "Olá, NOME"
    return(title)
}