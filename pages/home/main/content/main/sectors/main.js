import sector from "./sector/main.js"

export default function sectors(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            flex-wrap:wrap;
            width:50%;
            height:100%;
            padding:10px;
        }
        :responsive{
            width:80%;
        }`

    const sectors = cE("div",style)
    sectors.appendChild(sector("/assets/icons/finance.png", "Financeiro", "finance"))
    sectors.appendChild(sector("/assets/icons/team.png", "Recursos humanos", "hr"))
    sectors.appendChild(sector("/assets/icons/tasks.png", "Processos", "tasks"))
    sectors.appendChild(sector("/assets/icons/calendar.png", "Calendário", "calendar"))
    sectors.appendChild(sector("/assets/icons/catalog.png", "Estoque", "inventory"))
    sectors.appendChild(sector("/assets/icons/cloud.png", "Worph Cloud", "cloud"))
    return(sectors)
}