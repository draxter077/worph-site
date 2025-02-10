import option from "./option/main.js"

export default function path(c){
    let style = `
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: 5%;
            margin: 0px 0px 20px 0px;
            padding: 0px 5px;
            border: 1px solid grey;
            border-radius: 5px;
            overflow-x: scroll;
        }`

    const path = cE("div", style)
    path.id = c.id
    for(let i = 0; i < c.options.length; i++){
        path.appendChild(option(c.options[i].name, c.options[i].id))
        if(i != c.options.length - 1){
            path.innerHTML += ">"
        }
    }
    return(path)
}