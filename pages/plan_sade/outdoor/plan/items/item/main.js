import img from "./img/main.js"
import text from "./text/main.js"

export default function item(i){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin:15px;
        }
        :responsive{
            margin:10px;
        }`

    const item = cE("div",style)
    item.appendChild(img(i.img))
    item.appendChild(text(i.text))
    return(item)
}