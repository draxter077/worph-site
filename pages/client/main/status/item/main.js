import sign from "./sign/main.js"
import text from "./text/main.js"

export default function item(t,d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            width:30%;
            background:var(--colorDarkerBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            border-radius:5px;
            padding:10px 15px;
        }
        :responsive{
            margin:5px 0px;
            width:100%;
        }`

    const item = cE("div",style)
    item.appendChild(sign())
    item.appendChild(text(t,d))
    return(item)
}