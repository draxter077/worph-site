import img from "./img/main.js"
import text from "./text/main.js"

export default function result(e,w){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
        }`

    const result = cE("div",style)
    result.appendChild(img())
    result.appendChild(text(e,w))
    return(result)
}