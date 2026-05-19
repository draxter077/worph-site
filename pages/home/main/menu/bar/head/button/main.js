export default function button(){
    let style = `
        {
            font-size:32px;
            color:var(--colorWhite);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            transform:rotate(90deg);
        }`

    const button = cE("div",style)
    button.innerHTML = "✕"

    button.addEventListener(
        "click",
        () => {
            document.getElementById("menu").style.transform = "translateX(-100%)"
            document.getElementById("menu").style.opacity = "0"
        }
    )
    return(button)
}