import iframe from "./iframe/main.js"
import text from "./text/main.js"

export default function builder(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:100%;
            height:100%;
        }
        :responsive{
            flex-direction:column;
        }`

    const builder = cE("div",style)
    builder.appendChild(iframe())
    builder.appendChild(text())
    return(builder)
}