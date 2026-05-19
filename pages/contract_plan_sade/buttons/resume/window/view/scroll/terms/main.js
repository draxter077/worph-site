import text from "./text/main.js"
import button from "./button/main.js"

export default function terms(b){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            width:100%;
            height:100%;
        }`

    const terms = cE("div",style)
    terms.appendChild(text())
    terms.appendChild(button(b))
    return(terms)
}