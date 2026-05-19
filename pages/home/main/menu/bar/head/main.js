import title from "./title/main.js"
import button from "./button/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
            background:var(--colorBlue);
            padding:10px 15px;
        }`

    const head = cE("div",style)
    head.appendChild(title())
    head.appendChild(button())
    return(head)
}