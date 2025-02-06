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
            margin: 0px 0px 10px 0px;
        }`

    const top = cE("div", style)
    top.appendChild(up())
    top.appendChild(down())
    return(top)
}