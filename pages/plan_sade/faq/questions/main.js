import question from "./question/main.js"

export default function questions(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:flex-start;
            justify-content:space-between;
            flex-wrap:wrap;
            width:100%;
            margin:2.5% 0px 0px 0px;
        }`

    const questions = cE("div",style)
    const SD = {
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
            {
                "@type":"Question",
                "name":"O site terá integração com redes sociais e WhatsApp?",
                "acceptedAnswer":{
                    "@type":"Answer",
                    "text":"Sim. Incluímos botões flutuantes para contacto direto via WhatsApp, e links para suas redes sociais"
                }
            },
            {
                "@type":"Question",
                "name":"É possível criar um blog dentro do meu site institucional?",
                "acceptedAnswer":{
                    "@type":"Answer",
                    "text":"Sim, e nós recomendamos muito! Um blog é uma ferramenta poderosa de marketing de conteúdo que ajuda a atrair visitantes através do Google"
                }
            },
            {
                "@type":"Question",
                "name":"Qual o diferencial de contratar uma agência em vez de usar criadores de sites?",
                "acceptedAnswer":{
                    "@type":"Answer",
                    "text":"Criadores oferecem soluções genéricas, limitadas em SEO e que muitas vezes não pertencem a você. Se sua empresa não é como as outras, por que seu site deveria ser?"
                }
            },
            {
                "@type":"Question",
                "name":"Quanto tempo demora para ter meu site e meu e-mail?",
                "acceptedAnswer":{
                    "@type":"Answer",
                    "text":"Seu site ficará pronto em uma semana, já seu e-mail fica pronto em apenas um dia"
                }
            }
        ]
        
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SD)
    document.head.appendChild(script)

    let qs = [
        {question:"O site terá integração com redes sociais e WhatsApp?",answer:"Sim. Incluímos botões flutuantes para contacto direto via WhatsApp, e links para suas redes sociais"},
        {question:"É possível criar um blog dentro do meu site institucional?",answer:"Sim, e nós recomendamos muito! Um blog é uma ferramenta poderosa de marketing de conteúdo que ajuda a atrair visitantes através do Google"},
        {question:"Qual o diferencial de contratar uma agência em vez de usar criadores de sites?",answer:"Criadores oferecem soluções genéricas, limitadas em SEO e que muitas vezes não pertencem a você. Se sua empresa não é como as outras, por que seu site deveria ser?"},
        {question:"Quanto tempo demora para ter meu site e meu e-mail?",answer:"Seu site ficará pronto em uma semana, já seu e-mail fica pronto em apenas um dia"}
    ]

    for(let i = 0; i < qs.length; i++){
        questions.appendChild(question(qs[i]))
    }
    return(questions)
}