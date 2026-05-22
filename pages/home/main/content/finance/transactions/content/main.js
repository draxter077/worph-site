import payment from "./payment/main.js"

export default function content(ps){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
            overflow:scroll;
            white-space:nowrap;
        }
        :responsive{
            overflow-x:scroll;
        }`

    const content = cE("div",style)
    for(let i = 0; i < ps.length; i++){
        content.appendChild(payment(ps[i]))
    }
    return(content)
}