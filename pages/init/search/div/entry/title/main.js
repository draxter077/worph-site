export default function title(){
    let style = `
        {
            position: absolute;
            top: 5%;
            left: 2%;
            color: black;
            font-size: 20px;
            width: 80%;
            transition: font-size var(--transitionTime), top var(--transitionTime);
            background: white;
        }`

    const title = cE("div", style)
    title.innerHTML = "Pesquise"
    title.onmouseover = function a(e){
        e.target.style.fontSize = "12px"
        e.target.style.top = "-20%"
        e.target.style.width = "fit-content"
        e.target.parentElement.children[1].focus()
    }
    return(title)
}