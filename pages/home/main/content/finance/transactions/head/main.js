import search from "./search/main.js"
import buttons from "./buttons/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
        }`

    const head = cE("div",style)
    head.appendChild(search())
    head.appendChild(buttons())
    return(head)
}