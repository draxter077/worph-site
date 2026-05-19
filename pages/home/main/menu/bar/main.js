import head from "./head/main.js"
import sectors from "./sectors/main.js"
import links from "./links/main.js"

export default function bar(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            height:100%;
            width:30%;
            background:var(--colorBlack);
            box-shadow:0px 0px 1px 0px var(--colorWhite);
        }
        :responsive{
            width:100%;
        }`

    const bar = cE("div",style)
    bar.appendChild(head())
    bar.appendChild(sectors())
    bar.appendChild(links())
    return(bar)
}