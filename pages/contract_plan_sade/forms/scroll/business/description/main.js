export default function description(){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            margin:0px 0px 2.5% 0px;
        }`

    const description = cE("div",style)
    description.innerHTML = "Preencha com atenção. Você não poderá alterar elas depois"
    return(description)
}