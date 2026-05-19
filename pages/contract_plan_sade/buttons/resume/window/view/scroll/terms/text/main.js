export default function text(){
    let style = `
        {
            font-size:21px;
            color:var(--colorBlack);
            text-align:center;
            width:fit-content;
        }
        >a{
            color:var(--colorBlue);
            font-weight:900;
            border-bottom:1px solid var(--colorWhite);
            transition:all 0.5s;
        }
        >a:hover{
            border-bottom:1px solid var(--colorBlue);
        }`

    const text = cE("div",style)
    text.innerHTML = `Aceite nossos<br><a href="https://www.ph.net.br" target="_blank">Termos de Uso e Condições</a>para enviarmos seu pedido`
    return(text)
}