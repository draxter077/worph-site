import scroll from "./scroll/main.js"

export default function roller(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            height:32px;
            font-size:22px;
            width:fit-content;
            padding:0px 15px;
            margin:2.5% 0px 0px 0px;
            border-left:1px solid var(--colorBlue);
            border-right:1px solid var(--colorBlue);
            overflow:hidden;
        }`

    const roller = cE("div",style)
    roller.appendChild(scroll())
    return(roller)
}