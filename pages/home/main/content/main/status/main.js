import stat from "./stat/main.js"
import events from "./events/main.js"

export default function status(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;
            width:80%;
        }
        :responsive{
            width:95%;
        }`

    const status = cE("div",style)
    let d = new Date().getMonth()
    let months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    status.appendChild(stat(`Faturamento de ${months[d]}`,"R$ 000,00"))
    status.appendChild(stat("Tasks em andamento","00"))
    status.appendChild(events("Próximos eventos"))
    return(status)
}