import window from './window/main.js'

export default function button(){
    let style = `
        {
            font-size:14px;
            font-weight:900;
            background:var(--colorWhite);
            color:var(--colorBlack);
            padding:5px 10px;
            border-radius:5px;
            margin:0px 0px 0px 20px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            background:var(--colorBlue);
            color:var(--colorWhite);
        }`

    const button = cE("div",style)
    button.innerHTML = "Novo"

    button.addEventListener(
        "click",
        async function a(){
            button.removeEventListener("click",a)
            let w = window()
            document.getElementById("root").appendChild(w)
            await new Promise(r => setTimeout(r,100))
            w.style.opacity = 1
            button.addEventListener("click",a)
        }
    )
    return(button)
}