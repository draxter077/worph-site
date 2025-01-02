import upload from "./upload/main.js"
import search from "./search/main.js"

export default function init(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            height: 100dvh;
            width: 100%;
            padding: 20px;
        }`

    const init = cE("div", style)
    init.appendChild(upload())
    init.appendChild(search())
    return(init)
}