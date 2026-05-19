import item from "./item/main.js"

export default function items(is){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            flex-wrap:wrap;
            box-shadow:0px 0px 2px 0px var(--colorWhite);
            border-radius:5px;
            margin:20px 0px 0px 0px;
            padding:0px 5px;
        }
        :responsive{
            flex-direction:column;
        }`

    const items = cE("div",style)
    for(let i = 0; i < is.length; i++){
        items.appendChild(item(is[i]))
    }
    return(items)
}