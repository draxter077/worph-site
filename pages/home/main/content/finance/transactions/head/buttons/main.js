import new_ from "./new/main.js"
import export_ from "./export/main.js"
import import_ from "./import/main.js"

export default function buttons(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
        }`

    const buttons = cE("div",style)
    buttons.appendChild(new_())
    buttons.appendChild(export_())
    buttons.appendChild(import_())
    return(buttons)
}