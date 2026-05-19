export default function text(){
    let style = `
        {
            font-size:21px;
            color:var(--colorBlack);
            text-align:center;
            width:fit-content;
            margin:10px 0px 0px 0px;
        }`

    const text = cE("div",style)
    text.innerHTML = `Seu pedido está sendo enviado`
    return(text)
}