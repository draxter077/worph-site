import icon from "./icon/main.js"
import title from "./title/main.js"

export default function sector(src, t, e){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:30%;
            cursor:pointer;
            background:var(--colorBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            margin:10px;
            border-radius:10px;
            transition:all 0.25s;
        }
        :hover{
            transform:scale(1.05);
        }
        :responsive{
            width:40%;
        }`

    const sector = cE("div",style)
    sector.appendChild(icon(src))
    sector.appendChild(title(t))

    sector.addEventListener(
        "click",
        async function a(){
            document.getElementById(e).style.display = "flex"
            document.getElementById("main").style.opacity = "0"
            await new Promise(r => setTimeout(r,550))
            document.getElementById("main").style.display = "none"
            document.getElementById(e).style.opacity = "1"
        }
    )
    return(sector)
}