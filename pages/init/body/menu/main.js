import options from "./options/main.js"

export default function menu(){
    let style = `
        {
            width: 0%;
            height: 100%;
            background: black;
            transition: width var(--transitionTime);
            overflow: hidden;
        }`

    const menu = cE("div", style)
    menu.id = "menu"
    menu.appendChild(options())
    return(menu)
}