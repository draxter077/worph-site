export default function menu(){
    let style = `
        {
            height:35px;
            margin:0px calc(30% - 35px) 0px 0px;
            filter:invert(1);
            cursor:pointer;
            transition:all 0.5s;
        }
        :responsive{
            margin:2.5% 0px 0px 0px;
        }
        :hover{
            transform:rotate(-90deg);
        }`

    const menu = cE("img",style)
    menu.src = "/assets/icons/menu.png"
    menu.alt = "Ícone de menu"

    menu.addEventListener(
        "click",
        () => {document.getElementById("menu").style.transform = "translateX(0%)"}
    )
    return(menu)
}