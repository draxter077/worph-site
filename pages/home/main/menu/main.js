import bar from "./bar/main.js"

export default function menu(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            background:rgb(0,0,0,0.6);
            z-index:3;
            transition:all 0.5s;
            transform:translateX(-100%);
            opacity:0;
        }`

    const menu = cE("div",style)
    menu.id = "menu"
    menu.appendChild(bar())
    return(menu)
}