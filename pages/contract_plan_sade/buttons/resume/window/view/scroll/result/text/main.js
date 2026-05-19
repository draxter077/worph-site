export default function text(e,w){
    let style = `
        {
            font-size:16px;
            color:var(--colorBlack);
            text-align:center;
            width:fit-content;
            margin:10px 0px 0px 0px;
            width:100%;
        }
        >span{
            background:var(--colorBlue);
            padding:5px 10px;
            color:var(--colorWhite);
            font-weight:900;
            border-radius:5px;
        }`

    const text = cE("div",style)
    text.innerHTML = `<span>Boas notícias: recebemos seu pedido!</span><br>E já começamos a trabalhar nele!<br><br>Enviamos um e-mail para ${e}<br>Aguarde nosso contato no ${w}<br><br>Agradecemos sua confiança!`
    return(text)
}