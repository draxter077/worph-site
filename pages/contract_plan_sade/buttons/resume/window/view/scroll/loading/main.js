import bar from "./bar/main.js"
import text from "./text/main.js"

export default function loading(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
        }`

    const loading = cE("div",style)
    loading.appendChild(bar())
    loading.appendChild(text())
    return(loading)
}