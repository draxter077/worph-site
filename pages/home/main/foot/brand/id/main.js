import logo from "./logo/main.js"
import text from "./text/main.js"

export default function id(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
        }`

    const id = cE("a",style)
    id.href = "https://www.ph.net.br"
    id.target = "_blank"
    id.appendChild(logo())
    id.appendChild(text())
    return(id)
}