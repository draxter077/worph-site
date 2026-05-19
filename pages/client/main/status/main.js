import item from "./item/main.js"

export default function status(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            width:80%;
        }
        :responsive{
            flex-direction:column;
        }`

    const status = cE("div",style)
    status.appendChild(item("Domínio .br","domain.com.br"))
    status.appendChild(item("Site profissional","https://www.domain.com.br"))
    status.appendChild(item("E-mail corporativo","@domain.com.br"))
    return(status)
}