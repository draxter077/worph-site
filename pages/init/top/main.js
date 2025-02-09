import menu from "./menu/main.js"
import logo from "./logo/main.js"
import logout from "./logout/main.js"

export default function top(){
    let style = `
        {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 7.5%;
            background: linear-gradient(90deg, blue, black);
            padding: 0px 20px;
        }`

    const top = cE("div", style)
    top.appendChild(menu())
    top.appendChild(logo())
    top.appendChild(logout())
    return(top)
}