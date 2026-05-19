import item from "./item/main.js"

export default function items(is){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            margin:20px 0px 0px 0px;
            width:100%;
        }`

    const items = cE("div",style)
    for(let i = 0; i < is.length; i++){
        items.appendChild(item(is[i]))
    }
    return(items)
}