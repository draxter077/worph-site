import menu from "./menu/main.js"
import content from "./content/main.js"

export default function body(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
        }`

    const body = cE("div", style)
    body.appendChild(menu())
    body.appendChild(content())
    return(body)
}