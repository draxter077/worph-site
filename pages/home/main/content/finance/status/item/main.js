import title from "./title/main.js"
import detail from "./detail/main.js"

export default function item(t,d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:30%;
            padding:10px 15px;
            border-radius:5px;
            box-shadow:0px 0px 3px 0px var(--colorWhite);
        }
        :responsive{
            margin:5px 0px;
            width:48%;
        }`

    const text = cE("div",style)
    text.appendChild(title(t))
    text.appendChild(detail(d))
    return(text)
}