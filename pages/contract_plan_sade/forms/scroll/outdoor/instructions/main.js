export default function instructions(){
    let style = `
        {
            font-size:16px;
            text-align:justify;
            margin:2.5% 0px 0px 0px;
        }
        >span{
            border-bottom:1px solid var(--colorBlue);
        }`

    const instructions = cE("div",style)
    instructions.innerHTML = "Ficamos felizes pela confiança na Ph Web Software.<br><br>Este é um formulário para recebermos seu pedido de entrar para nosso Plano Completo, ele ainda <span>não é a confirmação definitiva</span>. Depois dele, vamos entrar em contato via WhatsApp para a finalização.<br><br>Ele é dividido em apenas duas partes: primeiramente, você irá nos dar detalhes gerais de contato e contar qual é seu objetivo com o site. Com base nessas informações, temos a segunda parte: nosso sistema interno vai propôr um design de site que alcance seus objetivos e represente sua empresa. Você pode conversar com ele para alterar quaisquer necessidades. Mas não se preocupe: <span>ele não é o design final</span>, apenas um rascunho para entendermos o que deseja.<br><br>Por fim, basta confirmar as informações e entraremos em contato em breve.<br><br>Embora essa ferramenta funcione em smartphones, recomendamos sua utilização em um computador<br>Vamos começar?</span>"
    return(instructions)
}