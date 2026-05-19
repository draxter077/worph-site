import view from "./view/main.js"

export default function window(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
            background:rgb(0,0,0,0.6);
            opacity:0;
            transition:all 0.5s;
            z-index:5;
        }`

    const window = cE("div",style)
    window.appendChild(view())
    return(window)
}