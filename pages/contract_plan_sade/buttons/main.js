import resume from "./resume/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-end;
            width:90%;
        }`

    const buttons = cE("div",style)
    buttons.appendChild(resume())
    return(buttons)
}