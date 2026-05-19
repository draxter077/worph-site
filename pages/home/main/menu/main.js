export default function menu(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            width:100%;
            height:100svh;
            background:rgb(0,0,0,0.4);
            z-index:3;
            transition:all 0.5s;
            transform:translateX(-100%);
        }`

    const menu = cE("div",style)
    menu.id = "menu"
    menu.addEventListener(
        "click",
        () => {
            menu.style.transform = "translateX(-100%)"
        }
    )
    return(menu)
}