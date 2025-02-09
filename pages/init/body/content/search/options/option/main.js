import download from "./download/main.js"
import update from "./update/main.js"
import title from "./title/main.js"
import folderImg from "./folderImg/main.js"

export default function option(c){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 200%;
            transition: translate var(--transitionTime), max-height var(--transitionTime);
            padding: 0px 0px 0px 5px;
            border-left: 1px solid white;
        }
        :hover{
            border-left: 1px solid black;
        }`

    const option = cE("div", style)
    option.id = c.id
    if(c.type == "file"){
        option.appendChild(download())
        option.appendChild(update())
        option.appendChild(title(c.name))
    }
    else if(c.type == "folder"){
        option.appendChild(folderImg(c.id))
        option.appendChild(title(c.name))
    }
    return(option)
}