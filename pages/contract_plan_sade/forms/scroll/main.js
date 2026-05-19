import outdoor from "./outdoor/main.js"
import business from "./business/main.js"
import builder from "./builder/main.js"
import confirmation from "./confirmation/main.js"

export default function scroll(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:400%;
            height:100%;
            transition:all 0.5s;
        }
        >div{
            padding:0.5%;
        }`

    const scroll = cE("div",style)
    scroll.appendChild(outdoor())
    scroll.appendChild(business())
    scroll.appendChild(builder())
    scroll.appendChild(confirmation())
    return(scroll)
}