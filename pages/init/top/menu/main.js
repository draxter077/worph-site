export default function menu(){
    let style = `
        {
            font-size: 25px;
            color: white;
        }`

    const menu = cE("button", style)
    menu.innerHTML = "="
    menu.onclick = function a(){
        const m = document.getElementById("menu")
        const c = document.getElementById("content")
        if(m.style.width == "0%"){
            m.style.width = "25%"
            c.style.width = "75%"
        }
        else{
            m.style.width = "0%"
            c.style.width = "100%"
        }
    }
    return(menu)
}