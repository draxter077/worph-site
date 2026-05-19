import info from "./info/main.js"

export default function data(d){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            width:90%;
            overflow:scroll;
        }
        :responsive{
            width:95%;
            margin:5% 0px 0px 0px;
            justify-content:flex-start;
        }`

    const data = cE("div",style)
    data.appendChild(info("Nome","Teste Teste LTDA"))
    data.appendChild(info("CNPJ","12.345.678/0001-12"))
    data.appendChild(info("E-mail","teste@gmail.com | contato@domain.com.br"))
    data.appendChild(info("WhatsApp","(00) 90000-0000"))
    return(data)
}