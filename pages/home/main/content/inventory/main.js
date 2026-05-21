export default function inventory(d){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;
            display:none;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:pink;
            opacity:0;
            transition:all 0.5s;
        }`

    const inventory = cE("div",style)
    inventory.id = "inventory"
    inventory.innerHTML = 'Inventório'
    return(inventory)
}