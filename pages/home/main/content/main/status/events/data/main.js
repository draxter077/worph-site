import scroll from "./scroll/main.js"

export default function roller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            height:23px;
            font-size:18px;
            width:fit-content;
            overflow:hidden;
        }`

    const roller = cE("div",style)
    roller.appendChild(scroll())
    return(roller)
}