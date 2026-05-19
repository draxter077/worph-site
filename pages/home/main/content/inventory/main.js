export default function inventory(d){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            width:100%;
            height:100%;
            background:pink;
        }`

    const inventory = cE("div",style)
    inventory.innerHTML = 'Inventório'
    return(inventory)
}