import title from "./title/main.js"
import instructions from "./instructions/main.js"

export default function confirmation(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            width:100%;
            height:100%;
            color:var(--colorWhite);
        }`

    const confirmation = cE("div",style)
    confirmation.appendChild(title())
    confirmation.appendChild(instructions())
    return(confirmation)
}