import title from "./title/main.js"
import value from "./value/main.js"

export default function info(t,v){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            background:var(--colorDarkerBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:5px;
            padding:10px 15px;
            margin:5px;
            white-space:nowrap;
        }`

    const info = cE("div",style)
    info.appendChild(title(t))
    info.appendChild(value(v))
    return(info)
}