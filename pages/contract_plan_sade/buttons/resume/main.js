import text from "./text/main.js"
import img from "./img/main.js"

import window from "./window/main.js"

export default function resume(){
    let style = `
        {
            display:flex;
            flex-direction:row;
            align-items:center;
            transform:translateX(0%);
            cursor:pointer;
            transition:all 0.5s;
        }
        :hover{
            transform:translateX(5%);
        }`

    const resume = cE("div",style)
    resume.appendChild(text())
    resume.appendChild(img())

    resume.addEventListener(
        "click",
        async function a(){
            const e = document.getElementById("forms").children[0]
            const p = document.getElementById("progress").children[0].children[0]
            if(e.style.transform == "translateX(-75%)"){ // confirmação
                resume.removeEventListener("click",a)

                let inputs = document.getElementById("inputs").children
                const body = {
                    html:document.getElementById("builderIframe").srcdoc,
                    observations:document.getElementById("builderChat").value,
                    email:inputs[0].children[1].value,
                    whatsapp:inputs[1].children[1].value,
                    name:inputs[2].children[1].value,
                    CNPJ:inputs[3].children[1].value,
                    sector:inputs[4].children[1].value,
                    goals:inputs[5].children[1].value
                }

                let w = window(body)
                document.getElementById("root").appendChild(w)
                await new Promise(r => setTimeout(r,100))
                w.style.opacity = 1
            }
            else if(e.style.transform == "translateX(-50%)"){ // página confirmação
                resume.children[0].innerHTML = "Confirmar"
                e.style.transform = "translateX(-75%)"
                p.style.width = "100%"

                let inputs = document.getElementById("inputs").children
                e.children[3].innerHTML = e.children[3].innerHTML.replace("NOME_EMPRESA",inputs[2].children[1].value).replace("EMAIL",inputs[0].children[1].value).replace("WHATSAPP",inputs[1].children[1].value)
            }
            else if(e.style.transform == "translateX(-25%)"){ // página builder
                let inputs = document.getElementById("inputs").children
                let ws = 1
                for(let i = 0; i < inputs.length; i++){
                    if(inputs[i].children[1].value.length == 0){
                        inputs[i].children[1].style = "animation:inputError 1s linear 0s 1 forwards"
                        ws = 0
                    }
                }
                if(ws){
                    const ifr = document.getElementById("builderIframe")
                    axios.post(`${api_url}/contract_plan_sade/builder`, {name:inputs[1].children[1].value,sector:inputs[3].children[1].value,goals:inputs[5].children[1].value})
                       .then(r => {
                            ifr.srcdoc = r.data.html
                            document.getElementById("builderChat").style = "opacity:1"
                        })
                       .catch(r => {ifr.srcdoc = `Error: ${r}`})
                    e.style.transform = "translateX(-50%)"
                    p.style.width = "66%"
                }
                for(let i = 0; i < inputs.length; i++){
                    if(inputs[i].children[1].value.length == 0){
                        inputs[i].children[1].style = ""
                    }
                }
            }
            else{ // página forms
                resume.children[0].innerHTML = "Continuar"
                e.style.transform = "translateX(-25%)"
                p.style.width = "33%"
            }
        }
    )
    return(resume)
}