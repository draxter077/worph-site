import scroll from "./scroll/main.js"

export default function view(b){
    let style = `
        {
            width:50%;
            height:50%;
            background:var(--colorWhite);
            box-shadow:0px 0px 3px 0px var(--colorWhite);
            border-radius:10px;
            overflow:hidden;
        }
        :responsive{
            height:80%;
            width:80%;
        }`

    const view = cE("div",style)
    view.id = "windowView"
    view.appendChild(scroll(b))
    return(view)
}