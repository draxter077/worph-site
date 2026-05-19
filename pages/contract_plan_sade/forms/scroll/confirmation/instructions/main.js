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
    instructions.innerHTML = "Agora é só clicar em confirmar.<br><br>Receberemos seu pedido e logo mais entraremos em contato pelo e-mail <span>EMAIL</span> ou pelo WhatsApp <span>WHATSAPP</span>, por isso fique atento nesses meios!<br><br>Novamente, <span>o rascunho do seu site não é a versão final dele</span>: ainda vamos atualizar o design dele, aplicando as últimas novidades de experiência de usuário (UX) e otimizando ele para SEO/Google.<br><br><span>Confirme e nos vemos em breve!</span>"
    return(instructions)
}