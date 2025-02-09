import up from "./up/main.js"
import down from "./down/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }`

    const top = cE("div", style)
    top.appendChild(up())
    top.appendChild(down())
    return(top)
}