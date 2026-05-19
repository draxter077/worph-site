import terms from "./terms/main.js"
import loading from "./loading/main.js"
import result from "./result/main.js"

export default function scroll(b){
    let style = `
        {
            display:flex;
            flex-direction:row;
            width:300%;
            height:100%;
            transition:all 0.5s;
        }
        >div{
            padding:0.5%;
        }`

    const scroll = cE("div",style)
    scroll.appendChild(terms(b))
    scroll.appendChild(loading())
    scroll.appendChild(result(b.email,b.whatsapp))
    return(scroll)
}