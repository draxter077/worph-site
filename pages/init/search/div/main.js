import entry from "./entry/main.js"
import options from "./options/main.js"

export default function div(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 20px;
            box-shadow: 0px 0px 5px 0px black;
            border-radius: 15px;
        }`

    const div = cE("div", style)
    div.appendChild(entry())
    div.appendChild(options())
    return(div)
}