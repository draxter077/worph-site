import icon from "./icon/main.js"
import title from "./title/main.js"

export default function sector(src, t, c, args){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:flex-start;
            width:100%;
            cursor:pointer;
            border-bottom:1px solid var(--colorWhite);
            padding:10px 15px;
            transition:all 0.25s;
        }
        :hover{
            background:var(--colorBlue);
        }`

    const sector = cE("div",style)
    sector.appendChild(icon(src))
    sector.appendChild(title(t))

    sector.addEventListener(
        "click",
        async function a(){
            document.getElementById("content").style.opacity = "0"
            await new Promise(r => setTimeout(r,550))
            document.getElementById("content").innerHTML = ""
            document.getElementById("content").appendChild(c(args))
            await new Promise(r => setTimeout(r,10))
            document.getElementById("content").style.opacity = "1"
            document.getElementById("menu").children[0].children[0].children[1].click()
        }
    )
    return(sector)
}