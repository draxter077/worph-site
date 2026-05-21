import title from "./title/main.js"
import data from "./data/main.js"

export default function events(t,d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            width:60%;
            padding:10px 15px;
            border-radius:5px;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
        }
        :responsive{
            margin:5px 0px;
            width:100%;
        }`

    const events = cE("div",style)
    events.appendChild(title(t))
    events.appendChild(data(d))
    return(events)
}