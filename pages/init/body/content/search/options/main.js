import option from "./option/main.js"

export default function options(content){
    let style = `
        {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 90%;
            background: white;
            border-bottom: 1px solid grey;
            margin: 5px 0px 0px 0px;
            overflow-y: scroll;
            overflow-x: hidden;
        }`

    const options = cE("div", style)

    for(let i = 0; i < content.length; i++){
        options.appendChild(option(content[i]))
    }
    return(options)
}