import title from "./title/main.js"
import description from "./description/main.js"
import items from "./items/main.js"
import price from "./price/main.js"

export default function plan(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            margin:7.5% 0px 0px 0px;
            width:fit-content;
            background:var(--colorDarkerBlue);
            border-radius:10px;
            padding:20px 25px;
            box-shadow:0px 0px 3px 0px var(--colorBlue);
        }
        :responsive{
            width:95%;
            margin:10% 0px;
        }`

    const plan = cE("div",style)
    plan.appendChild(title("Plano Completo"))
    plan.appendChild(description("A solução completa para tirar sua ideia do zero"))
    plan.appendChild(items([
                {img:"/assets/icons/domain.png",text:"Domínio .br"},
                {img:"/assets/icons/www.png",text:"Site profissional"},
                {img:"/assets/icons/email.png",text:"E-mail corporativo"},
                {img:"/assets/icons/refresh.png",text:"Atualizações ilimitadas"},
                {img:"/assets/icons/settings.png",text:"Suporte técnico 24/7"}
            ]))
    plan.appendChild(price("Mensal de R$ <span>259,99</span>"))
    return(plan)
}