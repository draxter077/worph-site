export default function price(p){
    let style = `
        {
            font-size:16px;
            color:var(--colorWhite);
            margin:2.5% 0px 0px 0px;
        }
        >span{
            font-size:28px;
        }`

    const price = cE("div",style)
    price.innerHTML = p
    return(price)
}