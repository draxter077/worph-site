import title from "./title/main.js"
import items from "./items/main.js"

export default function method(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:90%;
            margin:5% 0px 0px 0px;
            border-radius:5px;
            padding:20px 25px;
            background:var(--colorDarkerBlue);
            box-shadow:0px 0px 3px 0px var(--colorBlue);
            opacity:0;
            transform:translateY(50%);
            transition:all 0.5s;
        }
        :responsive{
            width:95%;
            margin:20% 0px 0px 0px;
        }`

    const method = cE("div",style)
    method.id = "method"
    method.appendChild(title())
    method.appendChild(items([
        {img:"/assets/icons/google.png",title:"Otimizado para Google (SEO)",description:"Onde seus clientes estão"},
        {img:"/assets/icons/user.png",title:"Pensado para o usuário (UX)",description:"Fáceis para seus clientes"},
        {img:"/assets/icons/deal.png",title:"Focado em geração de leads",description:"Não basta ser bonito"},
        {img:"/assets/icons/responsive.png",title:"Design responsivo",description:"Para todos os clientes"},
        {img:"/assets/icons/code.png",title:"Leve e rápido",description:"Do jeito que seu cliente gosta"},
        {img:"/assets/icons/marketing.png",title:"Gerador de tráfego orgânico",description:"O holofote estará em você"},
        {img:"/assets/icons/global.png",title:"Exatamente como você precisava",description:"Somos a sua solução completa"}
    ]))

    window.addEventListener(
        "scroll",
        async function a(){
            let e = document.getElementById(method.id)
            if(window.scrollY > e.offsetTop - window.innerHeight*0.7){
                window.removeEventListener("scroll",a)
                e.style.opacity = 1
                e.style.transform = "translateY(0%)"
            }
        }
    )
    return(method)
}