import bar from "./bar/main.js"

export default function progress(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
        }`

    const progress = cE("div",style)
    progress.id = "progress"
    progress.appendChild(bar())
    return(progress)
}