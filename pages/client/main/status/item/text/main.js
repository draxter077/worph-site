import title from "./title/main.js"
import detail from "./detail/main.js"

export default function text(t,d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            margin:0px 0px 0px 20px;
        }`

    const text = cE("div",style)
    text.appendChild(title(t))
    text.appendChild(detail(d))
    return(text)
}