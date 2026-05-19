import title from "./title/main.js"
import textarea from "./textarea/main.js"
import buttons from "./buttons/main.js"

export default function view(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            width:50%;
            height:50%;
            background:var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorWhite);
            border-radius:10px;
            padding:1%;
        }
        :responsive{
            height:80%;
            width:80%;
            justify-content:space-around;
        }`

    const view = cE("div",style)
    view.id = "windowView"
    view.appendChild(title())
    view.appendChild(textarea())
    view.appendChild(buttons())
    return(view)
}