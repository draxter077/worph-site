import main from "./main/main.js"
import finance from "./finance/main.js"
import hr from "./hr/main.js"
import tasks from "./tasks/main.js"
import inventory from "./inventory/main.js"
import calendar from "./calendar/main.js"
import cloud from "./cloud/main.js"

export default function content(d){
    let style = `
        {
            position:relative;
            width:100%;
            height:100%;
            overflow:scroll;
        }`

    const content = cE("div",style)
    content.id = "content"
    content.appendChild(main(d))
    content.appendChild(finance(d))
    content.appendChild(hr(d))
    content.appendChild(tasks(d))
    content.appendChild(inventory(d))
    content.appendChild(calendar(d))
    content.appendChild(cloud(d))
    return(content)
}