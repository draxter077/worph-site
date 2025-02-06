export default function menu(){
    let style = `
        {
            width: 25%;
            height: 100%;
            background: black;
            transition: width var(--transitionTime);
        }`

    const menu = cE("div", style)
    menu.id = "menu"
    return(menu)
}