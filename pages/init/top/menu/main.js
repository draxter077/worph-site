export default function menu(){
    let style = `
        {
            font-size: 25px;
            font-weight: 900;
            color: white;
            transition: transform var(--transitionTime);
        }
        :hover{
            transform: scale(1.5, 1.5);
        }`

    const menu = cE("button", style)
    menu.innerHTML = "="
    menu.onclick = function a(){
        const m = document.getElementById("menu")
        const c = document.getElementById("content")
        if(m.style.width == "25%"){
            m.style.width = "0%"
            c.style.width = "100%"
        }
        else{
            m.style.width = "25%"
            c.style.width = "75%"
        }
    }
    return(menu)
}