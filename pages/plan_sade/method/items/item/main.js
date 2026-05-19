import title from "./title/main.js"
import description from "./description/main.js"

export default function item(i){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:10px;
            padding:10px 15px;
            margin:10px;
            width:30%;
        }
        :responsive{
            width:100%;
        }`

    const item = cE("div",style)
    item.appendChild(title(i.img,i.title))
    item.appendChild(description(i.description))
    return(item)
}