import login from "./login/main.js"
import main from "./main/main.js"

export default function home(data){
    let style = `
        {
            width:100%;
        }`

    const home = cE("div", style)
    document.title = "Worph Home"
    if(data){
        //axios.defaults.headers.common["userAuth"] = data.user.id
        data = {
            user:{
                id:1,
                name:"name",
                cnpj:"12.345.678/0001-10",
                email:"name@email.com",
                whatsapp:"(41) 99171-8360",
                domain:"domain.com.br"
            },
            orders:[
                {
                    id:1,
                    date:"00/00/0000",
                    clientid:1,
                    content:"O conteúdo do pedido quem sabe beeeeeeeeeeeeeeem grande bem grande mesmo passando",
                    status:0
                },
                {
                    id:1,
                    date:"00/00/0000",
                    clientid:1,
                    content:"O conteúdo do pedido quem sabe beeeeeeeeeeeeeeem grande bem grande mesmo passando",
                    status:0
                },
                {
                    id:1,
                    date:"00/00/0000",
                    clientid:1,
                    content:"O conteúdo do pedido quem sabe beeeeeeeeeeeeeeem grande bem grande mesmo passando",
                    status:0
                }
            ],
            payments:[
                {
                    id:1,
                    date:"00/00/0000",
                    clientid:1,
                    title:"O título do pagamento sabe-se lá deus o quẽ",
                    value:259.99,
                    status:0
                },
                {
                    id:1,
                    date:"00/00/0000",
                    clientid:1,
                    title:"O título do pagamento sabe-se lá deus o quẽ",
                    value:259.99,
                    status:0
                },
                {
                    id:1,
                    date:"00/00/0000",
                    clientid:1,
                    title:"O título do pagamento sabe-se lá deus o quẽ",
                    value:259.99,
                    status:0
                }
            ]
        }
        home.appendChild(main(data))
    }
    else{
        home.appendChild(login())
    }
    return(home)
}