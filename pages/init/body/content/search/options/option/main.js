import download from "./download/main.js"
import update from "./update/main.js"
import title from "./title/main.js"

export default function option(t){
    let style = `
        {
            display: flex;
            flex-direction: row;
            width: 200%;
            max-height: 100%;
            transition: translate var(--transitionTime), max-height var(--transitionTime);
            padding: 0px 0px 0px 5px;
            border-left: 1px solid white;
        }
        :hover{
            border-left: 1px solid black;
        }`

    const option = cE("div", style)
    option.id = "9237oqweuy"
    option.appendChild(download())
    option.appendChild(update())
    option.appendChild(title(t))
    return(option)
}