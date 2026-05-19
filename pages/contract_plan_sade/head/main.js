import logo from "./logo/main.js"

export default function head(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
            padding:1%;
        }`

    const head = cE("div",style)
    head.appendChild(logo())
    return(head)
}