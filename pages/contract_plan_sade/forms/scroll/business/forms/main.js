import question from "./question/main.js"

export default function forms(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            width:100%;
        }
        :responsive{
            flex-direction:column;
        }`

    const forms = cE("div",style)
    forms.id = "inputs"
    const qs = [
        {title:"E-mail para contato",placeholder:"seunome@email.com.br"},
        {title:"WhatsApp para contato",placeholder:"(00) 90000-0000"},
        {title:"Nome da empresa",placeholder:"Empresa LTDA"},
        {title:"CNPJ da empresa",placeholder:"12.345.678/1234-56"},
        {title:"Setor da empresa",placeholder:"Advocacia, Psicologia, Medicina, Engenharia, Varejo..."},
        {title:"Objetivos com o site",placeholder:"Gerar leads, aumentar visibilidade..."},
    ]

    for(let i = 0; i < qs.length; i++){forms.appendChild(question(qs[i]))}
    return(forms)
}