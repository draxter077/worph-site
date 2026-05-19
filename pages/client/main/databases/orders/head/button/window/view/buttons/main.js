import close from "./close/main.js"
import submit from "./submit/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            width:100%;
            font-size:16px;
        }
        :responsive{
            justify-content:space-around;
        }`

    const buttons = cE("div",style)
    buttons.appendChild(close())
    buttons.appendChild(submit())
    return(buttons)
}