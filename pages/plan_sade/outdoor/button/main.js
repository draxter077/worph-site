import img from "./img/main.js"
import text from "./text/main.js"

export default function button(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            background:var(--colorWhite);
            border-radius:50px;
            margin:2.5% 0px 0px 0px;
            padding:15px 10%;
            transition:all 0.5s;
        }
        :hover{
            transform:translateX(5%);
        }
        :responsive{
            width:80%;
        }`

    const button = cE("a",style)
    button.href = "/plano_completo/pedido"
    button.appendChild(img())
    button.appendChild(text())
    return(button)
}