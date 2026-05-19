import plan from "./plan/main.js"
import button from "./button/main.js"

export default function outdoor(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
        }`

    const outdoor = cE("div",style)
    outdoor.id = "services"
    outdoor.appendChild(plan())
    outdoor.appendChild(button())
    return(outdoor)
}