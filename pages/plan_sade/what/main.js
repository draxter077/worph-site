import about from "./about/main.js"

export default function what(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            margin:5% 0px 0px 0px;
        }
        :responsive{
            margin:20% 0px 0px 0px;
        }`

    const what = cE("div",style)
    what.id = "what"
    what.appendChild(about())
    return(what)
}