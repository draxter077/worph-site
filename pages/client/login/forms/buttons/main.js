import submit from "./submit/main.js"
import forgot from "./forgot/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:5% 0px 0px 0px;
        }`

    const buttons = cE("div",style)
    buttons.appendChild(submit())
    buttons.appendChild(forgot())
    return(buttons)
}