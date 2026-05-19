import main from "../../../content/main/main.js"
import finance from "../../../content/finance/main.js"
import hr from "../../../content/hr/main.js"
import tasks from "../../../content/tasks/main.js"
import calendar from "../../../content/calendar/main.js"
import inventory from "../../../content/inventory/main.js"
import cloud from "../../../content/cloud/main.js"

import sector from "./sector/main.js"

export default function sectors(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            padding:10px;
        }`

    const sectors = cE("div",style)
    sectors.appendChild(sector("/assets/icons/terminal.png", "Console", main, undefined))
    sectors.appendChild(sector("/assets/icons/finance.png", "Financeiro", finance, undefined))
    sectors.appendChild(sector("/assets/icons/team.png", "Recursos humanos", hr, undefined))
    sectors.appendChild(sector("/assets/icons/tasks.png", "Processos", tasks, undefined))
    sectors.appendChild(sector("/assets/icons/calendar.png", "Calendário", calendar, undefined))
    sectors.appendChild(sector("/assets/icons/catalog.png", "Estoque", inventory, undefined))
    sectors.appendChild(sector("/assets/icons/cloud.png", "Worph Cloud", cloud, undefined))
    return(sectors)
}