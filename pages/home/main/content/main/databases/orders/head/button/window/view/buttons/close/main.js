export default function close(){
    let style = `
        {
            font-size:14px;
            font-weight:900;
            color:var(--colorBlack);
            border-bottom:1px solid var(--colorWhite);
            padding:0px 2px;
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            border-bottom:1px solid var(--colorBlack);
        }`

    const close = cE("div",style)
    close.innerHTML = "Cancelar"

    close.addEventListener(
        "click",
        async function a(e){
            close.removeEventListener("click",a)
            let w = e.target.parentElement.parentElement.parentElement
            w.style.opacity = 0
            await new Promise(r => setTimeout(r,600))
            document.getElementById("root").removeChild(w)
        }
    )
    return(close)
}