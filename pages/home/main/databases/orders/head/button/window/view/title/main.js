export default function title(){
    let style = `
        {
            font-size:18px;
            color:var(--colorBlack);
        }`

    const title = cE("div",style)
    title.innerHTML = "Novo pedido"
    return(title)
}